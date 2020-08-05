import knex from 'knex'

export async function up(knex: knex) {
  return knex.schema.createTable('connections', table => {
    table.increments('id').primary()

    table.integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('cascade')
      .onDelete('cascade')

    table.timestamps(true, true)
  })
}

export async function down(knex: knex) {
  return knex.schema.dropTable('connections')
}