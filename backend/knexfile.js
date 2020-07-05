// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/database.sqlite3'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/database/migrations'
    },
    seeds: {
      directory: './src/database/seeds'
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/database.sqlite3'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/database/migrations'
    },
    seeds: {
      directory: './src/database/seeds'
    },
    useNullAsDefault: true,
  },

  production: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/database.sqlite3'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/database/migrations'
    },
    seeds: {
      directory: './src/database/seeds'
    },
    useNullAsDefault: true,
  }
};
