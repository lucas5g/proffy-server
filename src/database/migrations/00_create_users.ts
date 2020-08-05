import knex from 'knex'

export async function up(knex: knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.string('avatar').notNullable()
    table.string('whatsapp').notNullable()
    table.string('bio').notNullable()

    table.timestamps(true, true)


  })
}

export async function down(knex: knex){
  return knex.schema.dropTable('users')
}