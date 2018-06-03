import { USER_TABLE, USER_ID, USER_SEQUENCE } from "./const";
import { Table, Column, Entity, PrimaryKey, Sequence} from 'relax-orm';

@Table(USER_TABLE)
export class User extends Entity<User>{

  @PrimaryKey()
  @Sequence(USER_SEQUENCE)
  @Column(USER_ID)
  id?: number;

  @Column()
  name?: string;
}
