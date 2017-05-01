module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'shoppingcart_dev',
      host : '127.0.0.1'
      // user:     'username',
      // password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: __dirname + '/seeds/dev'
    }
  },

  test: {
    client: 'postgresql',
    connection: {
      database: 'shoppingcart_test',
      host : '127.0.0.1',
      // user:     'username',
      // password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: __dirname + '/seeds/dev'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './seeds/staging'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './seeds/production'
    }
  }
};
