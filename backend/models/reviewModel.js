const mongoose = require('../connection');

const schema = mongoose.Schema({
   title: String,
   description: String,
   data: Object,
   user: { type: mongoose.Types.ObjectId, ref: "Users" },
   reply: [{ type: mongoose.Types.ObjectId, ref: "reviews" }],
   upvotes: Array,
   downvotes: Array,
})


const model = mongoose.model('reviews', schema);

module.exports = model;