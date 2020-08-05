import knex from 'knex'

export async function up(knex: knex) {
  return knex.schema.createTable('classes', table => {
    table.increments('id').primary()
    table.string('subject').notNullable()
    table.decimal('cost').notNullable()
    table.integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onUpdate('cascade')
      .onDelete('cascade')

    table.timestamps(true, true)
    
  })
}

export async function down(knex: knex) {
  return knex.schema.dropTable('classes')
}