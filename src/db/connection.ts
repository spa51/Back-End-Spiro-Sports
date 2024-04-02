import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('erizotesis', 'root', '15105101', {
    host: 'localhost',
    dialect: 'mysql'/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });

  export default sequelize;