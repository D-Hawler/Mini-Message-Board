const { Pool } = require("pg");
require("dotenv").config();

// ALTER DATABASE your_database_name SET timezone TO 'Europe/Kiev';
module.exports = new Pool({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.DBPORT,
});
