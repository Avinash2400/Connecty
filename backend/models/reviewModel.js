const mongoose = require('../connection');

const schema = mongoose.Schema({
   title:String,
   data:Object,
   user:{types:mongoose.Types.ObjectId,ref:"Users"},
   reviews:Array
   
})


const model = mongoose.model('Users', schema);

module.exports = model;