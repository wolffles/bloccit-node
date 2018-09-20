const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema (structure)
 
const PostSchema = new Schema({
    post: {
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
    },
    topic: {
         $ref: 'topic',
         type: Schema.Types.ObjectId
    },
    comments: [
        {
        //   user: {
        //     type: Schema.Types.ObjectId,
        //     ref: 'users'
        //   },
          text: {
            type: String,
            required: true
          },
          date: {
            type: Date,
            default: Date.now
          }
        }
    ]
});

module.exports = Post = mongoose.model('post', PostSchema);
