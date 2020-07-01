
exports.up = function(knex) { // método up responsável pela criação da tabela 
  return knex.schema.createTable('ongs', function (table) {
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable(); //2 representa o tamanho, 2 caracteres
  });
};

exports.down = function(knex) { // método down caso eu queira desfazer oque eu fiz no up
  return knex.schema.dropTable('ongs');
};
