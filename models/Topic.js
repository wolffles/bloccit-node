const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema 

const TaskSchema = new Schema({
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

module.export = Task = mongoose.model('topic', TopicSchema);