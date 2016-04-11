module.exports ={
  database: process.env.MONGO_URI || 'localhost/votePeps',
  port: process.env.PORT || 3000
}
