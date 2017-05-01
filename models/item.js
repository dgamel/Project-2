const Bookshelf = require('../bookshelf');

const Item = Bookshelf.Model.extend({
  tableName: 'items',
  hasTimestamps: true
});

module.exports = Bookshelf.model('Item', Item);
