const path = require('path')
const parse = require('pg-connection-string').parse
const config = parse(process.env.DATABASE_URL)

export default ({ env }) => {
  if(env('NODE_ENV') === 'production') {
    return {
      connection: {
        client: 'portgres',
        connection: {
          host: config.host,
          port: config.port,
          database: config.database,
          user: config.user,
          password: config.password,
          ssl: {
            rejectUnauthorized: false
          }
        }
      },
      debug: false
    }
  }
  return null
};
