var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// Connect to MongoDB and create/use database called angular-project
mongoose.connect('mongodb://localhost/angular-project')
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));









// Create a schema
// var TodoSchema = new mongoose.Schema({
//   name: String,
//   password : String
// });


// Create a model based on the schema

