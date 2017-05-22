const knex = require('knex')(require('./db/knexfile')['development']);
const bookshelf = require('bookshelf')(knex);
bookshelf.plugin('registry');

module.exports = bookshelf;
