const Item = require('../../../models/item.js');

// DELETE the old items
Item.where('id', '!=', 0).destroy()
.then( () => {
  // CREATE some items
  return Promise.all([
    Item.forge( { name: 'item1' }).save(),
    Item.forge( { name: 'item2' }).save(),
    Item.forge( { name: 'item3' }).save()
  ]);
})
.then( () => {
  // GET all of the items
  return Item.forge().orderBy('id').fetchAll();
})
.then( items => {
  console.log(items.toJSON());
  process.exit();
})
.catch( err => {
  console.error(err);
  process.exit(1);
});
