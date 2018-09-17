const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema 

const TopicSchema = new Schema({
    topic: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Topic = mongoose.model('topic', TopicSchema);
