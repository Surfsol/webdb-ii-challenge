
exports.up = function(knex) {
  return knex.schema.createTable('cars', function(table){
    //primary key id autoincrements
    table.increments()
    table.string('VIN', 255).notNullable();
    table.string('make', 100).notNullable();
    table.string('model', 100).notNullable();
    table.float('mileage', 255).notNullable();
    table.string('transmission type', 64);
    table.sting('title status', 20)
    table.timestamp(true, true)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
