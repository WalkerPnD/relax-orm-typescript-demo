export const USER_TABLE = 'TB_USER';
export const USER_ID = 'SEQ_NUM_USER';
export const USER_SEQUENCE = 'SQ_USER';

export const DBCONFIG = {
  user          : process.env.NODE_ORACLEDB_USER || 'RLXORM',
  password      : process.env.NODE_ORACLEDB_PASSWORD || 'oracle',
  connectString : process.env.NODE_ORACLEDB_CONNECTIONSTRING || 'localhost/xe',
  externalAuth  : process.env.NODE_ORACLEDB_EXTERNALAUTH ? true : false,
};