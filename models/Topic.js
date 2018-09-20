const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post = require('./Post').PostSchema

//create Schema (structure)

const TopicSchema = new Schema({
    topic: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    posts: [
        { 
            ref: 'post',
            type: Schema.Types.ObjectId
            
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }
});


// this exports our structure(schema) and our collection(table) to be used in api calls 
module.exports = Topic = mongoose.model('topic', TopicSchema);
