import { User } from "./model";
import { DBCONFIG } from "./const";
import { ConnectionManager, ResultOrder } from "relax-orm";

test();

async function test() {
  const conn = new ConnectionManager({
    user          : DBCONFIG.user,
    password      : DBCONFIG.password,
    connectString : DBCONFIG.connectString,
  });
  await conn.init();
  conn.addEntities([ User ]);

  // Select all users from empty table
  let users = await User.findAll();
  console.log(users);

  // Creating 3 users
  const firstUser = await User.create({ name: 'walker'});
  const secontUser = await User.create({ id: 20, name: 'style'});
  await User.create({ name: 'walker'});
  console.log(firstUser, secontUser)

  // Selecting all users ordering by name: will return 3 users
  users = await User.findAll({
    order: [
      ['name', ResultOrder.ASC],
    ]
  });
  console.log(users);

  // Selecting users have name 'walker': will return 2 users
  users = await User.findAll({
    where: {name: 'walker'},
  });
  console.log(users);

  // Selecting user by Id
  const user = await User.findOne({where: {id: firstUser.id}});
  console.log(user);

  // Changing name
  if (!user) {
    throw new Error('User was not saved correctly.');
  }
  user.name = 'new name';
  await user.save().catch(console.log);
  ;

  // checking result with limit: will return 2 of 3 users
  users = await User.findAll({
    limit: 2,
  });
  console.log(users);

  // Deleting user
  let rowsAffected = await User.destroy({id: secontUser.id});
  console.log(rowsAffected);
  users = await User.findAll();
  console.log(users); // will return 2 of 2 users;

  // Destroy all
  rowsAffected = await User.destroyAll();
  console.log(rowsAffected);
  users = await User.findAll();
  console.log(users); // will return empty array;

}