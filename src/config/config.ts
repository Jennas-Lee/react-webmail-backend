const config = {
  development: {
    username: 'postgres',
    password: 'postgres12345678',
    database: 'postgres',
    host: '10.0.0.7',
    port: 5432,
    dialect: 'postgres',
    timezone: '+09:00',
    logging: console.log
  },
  production: {
    username: process.env.EXPRESS_APP_DATABASE_USERNAME,
    password: process.env.EXPRESS_APP_DATABASE_PASSWORD,
    database: process.env.EXPRESS_APP_DATABASE_NAME,
    host: process.env.EXPRESS_APP_DATABASE_HOST,
    port: process.env.EXPRESS_APP_DATABASE_PORT,
    dialect: 'postgres',
    timezone: '+09:00',
    logging: false
  },
}

export default config;
