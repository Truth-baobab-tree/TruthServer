let env;

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
  env = process.env;
}

const development = {
  "username": env.DB_USERNAME,
  "password": env.DB_PASSWORD,
  "database": env.DB_DEV,
  "host": env.DB_HOST,
  "dialect": "mysql"
};

const test = {
  "username": env.DB_USERNAME,
  "password": env.DB_PASSWORD,
  "database": env.DB_TEST_PROD,
  "host": env.DB_HOST,
  "dialect": "mysql"
};

const production = {
  "username": env.DB_USERNAME,
  "password": env.DB_PASSWORD,
  "database": env.DB_DEV_PROD,
  "host": env.DB_HOST,
  "dialect": "mysql"
};

module.exports = { development, test, production };