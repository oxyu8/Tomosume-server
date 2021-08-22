import mysql from "mysql";
import dotenv from "dotenv";
export class MySQLConnection {
  private connection: any;

  public constructor() {
    dotenv.config();
    this.connection = mysql.createConnection({
      host: process.env.DB_HOST_DEV,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    });
  }

  _connect() {
    this.connection.connect();
  }
  _query() {
    this.connection.query("SELECT * from user;", (row: any, error: any) => {
      console.log(error);
      console.log(row);
    });
  }
}
