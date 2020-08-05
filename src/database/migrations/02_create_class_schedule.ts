import knex from 'knex'

export async function up(knex: knex) {
  return knex.schema.createTable('class_schedule', table => {
    table.increments('id').primary()
    table.integer('week_day').notNullable()
    table.integer('from').notNullable()
    table.integer('to').notNullable()
    
    table.integer('class_id')
      .unsigned()
      .references('id')
      .inTable('classes')
      .onUpdate('cascade')
      .onDelete('cascade')

      table.timestamps(true, true)


  })
}

export async function down(knex: knex){
  return knex.schema.dropTable('class_schedule')
}