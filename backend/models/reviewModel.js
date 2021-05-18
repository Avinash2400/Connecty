const mongoose = require('../connection');

const schema = mongoose.Schema({
   title: String,
   data: Object,
   user: { types: mongoose.Types.ObjectId, ref: "Users" },
   reply: [{ types: mongoose.Types.ObjectId, ref: "reviews" }]

})


const model = mongoose.model('reviews', schema);

module.exports = model;