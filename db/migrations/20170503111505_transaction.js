exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists("transaction", function(table) {

    table.increments('id').primary();  // adds an auto incrementing PK column
    table.integer('product_id').notNullable();
    table.integer('shoppingcart_id');

    table.timestamps(true, true);  // adds created_at and updated_at
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("transaction");
};
