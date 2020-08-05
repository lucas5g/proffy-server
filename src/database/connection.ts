import knex from 'knex'
import path from 'path'

// const db = knex({
//   client: 'sqlite3',
//   connection:{
//     filename: path.resolve(__dirname, 'database.sqlite')
//   },

//   useNullAsDefault: true
// })

const db = knex({
  client: 'mysql',
  connection:{
    host : process.env.DB_HOST ||  '127.0.0.1',
    user : process.env.DB_USER || 'userdb',
    password : process.env.DB_PASSWORD || 'userdb_server',
    database : process.env.DB_DATABASE || 'proffy'
  },

  // useNullAsDefault: true
})



export default db
