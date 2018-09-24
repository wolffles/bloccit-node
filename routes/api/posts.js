const express = require('express');
const router = express.Router();

const Post = require("../../models/Post");
const Topic = require('../../models/Topic');

router.get("/", (req,res) => {
    
    Post.find()
        .sort({ date: -1 })
        .then(posts => res.json(posts));
    console.log("works")
});

router.get('/:postId', (req, res) => {
    Post.findById(req.params.postId).then(post => res.json(post));

})

// @route Delete api/posts
// @description Delete a post
// @access Public
// router.delete('/:postId', async (req, res) => {
//     Post.findById(req.params.postId).then(post => post.remove().then(() => res.json({success:true})))
//     .catch(err => res.status(404).json({success:false}));
// }); 

router.delete("/:postId", async (req,res) => {
    const {postId} = req.params
    post_obj = await Post.findById(postId)
    
    try{
        await Topic.findById(post_obj.topic_id, (err, doc) => {
            doc.posts = doc.posts.filter(id => id != postId);
            doc.save();
            console.log("after save" +doc)
        });
        await post_obj.remove();
        console.log("post has been removed")
        res.json({success:true})
    } catch(e) {
        res.status(404).json({success:false })
    }
});

//@route Post api/posts
//@description Post A Post
//@access Public

// moved post for posts collection to topics route

// router.post("/", (req,res) => {

//     const {topic_id} = req.params
//     const newPost = new Post({
//         post: req.body.post,
//         description: req.body.description,
//         topic_id: req.body.topic_id
//     });

//     newPost.save().then(post => res.json(post)).catch(err => console.log(err));
// })

module.exports = router; 