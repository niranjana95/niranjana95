require("dotenv").config();

const Sequelize = require("sequelize");

// const DB_NAME = process.env.DB_NAME;
// const DB_USERNAME = process.env.DB_USERNAME;
// const DB_PASSWORD = process.env.DB_PASSWORD;
// const DB_HOST = process.env.DB_HOST;

const sequelize = new Sequelize("chatapp", "root", "sanjai", {
  dialect: "mysql",
  logging: true,
  host: "127.0.0.1",
});

module.exports = sequelize;
