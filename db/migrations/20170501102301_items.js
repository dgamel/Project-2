exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists("items", function(table) {
    table.increments().primary();  // adds an auto incrementing PK column

    table.string('name').notNullable();

    table.timestamps(true, true);  // adds created_at and updated_at
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("items");
};
