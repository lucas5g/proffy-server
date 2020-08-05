import path from 'path'

module.exports = {
  client: 'mysql',
  connection:{
    host : process.env.DB_HOST || '127.0.0.1',
    user : process.env.DB_USER || 'userdb',
    password : process.env.DB_PASSWORD || 'userdb_server',
    database : process.env.DB_DATABASE || 'proffy'
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  },
  useNullAsDefault: true
}

