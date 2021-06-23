const mongoose = require('../connection');
const schema = mongoose.Schema({
    user: { type: mongoose.Types.ObjectId, ref: 'Users' },
    title: String,
    content: Object,
    created: Date,
})

const model = mongoose.model('Query', schema);

module.exports = model;
