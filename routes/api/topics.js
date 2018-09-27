const express = require('express');
const router = express.Router();

// Topic model 
const Topic = require('../../models/Topic');
const Post = require('../../models/Post')

//@route Get api/Topics
//@desc Get All Topics
//@access Public 
 // this / is already the end point for api/topics/ since your already in the route.
router.get("/", (req,res) => {
    //returns a promis so you have to use.then

    Topic.find()
        .sort({ date: -1 })
        .then(topics => res.json(topics));
});


//@route Get api/topics/:id
//@desc Get a specific topic
//@access Public
router.get('/:topicId',(req,res) => {
    console.log('veiwTopic backend', req.params)
    Topic.findById(req.params.topicId)
    .then(topic => {
       console.log("this is recieving ", topic);
       return  res.json(topic);
    });
});
  
//@route Post api/Topics
//@desc Post All Topics
//@access Public 
// this / is already the end point for api/topics/ since your already in the route.
router.post("/", (req,res) => {
    // console.log("topic" + req.body.topic)
    const newTopic = new Topic({
        topic: req.body.topic,
        description: req.body.description
    });

    newTopic.save().then(topic => res.json(topic));
});

 
//@route delete api/topics
//@desc delete a topic
// @access Public
router.delete('/:id', (req, res) => {
    Topic.findById(req.params.id).then(topic => topic.remove().then(() => res.json({success:true})))
    .catch(err => res.status(404).json({success:false}));
});  

//@route Get api/topic/:id/posts
//@desc shows all references(id)s of posts of a given topic
router.get('/:topicId/posts', (req,res) => {
    const {topicId} = req.params
    Topic.findById(topicId)
    .populate('posts')
    .exec(function(err,data){
        if (err) {
            throw err;
        }
        else {
            console.log(data)
            res.json(data);

        }
    })
    // .then(topic => res.send(topic))
    // .catch(err => res.send(err))
});
 

//@route Get api/topic/:id/posts/:id
//@desc shows a single post
router.get('/:topicId/posts/:postId', async (req, res) => {
    const {postId} = req.params
    try {    
        post_obj = await Post.findById(postId)
        res.json(post_obj)
    } catch(e) {
        res.send(e)
    }  
});

//@route Post api/topic/:id/posts
//@ Posts a new Post reference into a topics.post array && create a new post object
router.post('/:id/posts', (req,res) => {
    const newPost = new Post({
        post: req.body.post,
        description: req.body.description,
        topic_id: req.params.id
    });
    Topic.findById(req.params.id, (err, doc) => {
        doc.posts.push(newPost._id)
        doc.save();
    }).then(() => {
        newPost.save().then(post => res.json(post))
    })
});
 
//below does the same thing except using an async await method, which I saved as a reference to myself.
//@route Post api/topic/:id/posts
//@ Posts a new Post reference into a topics.post array && create a new post object
// router.post('/:id/posts',  async (req,res) => {
//     const newPost = new Post({
//         post: req.body.post,
//         description: req.body.description,
//         topic_id: req.params.id
//     });
//     Topic.findById(req.params.id, (err, doc) => {
//         doc.posts.push(newPost._id)
//         doc.save();
//     }).then(() => {
//         newPost.save().then(post => res.json(post))
//     })
// })



// @route Post api/topic/:id/posts
// @ Posts a new Post reference into a topics.post array && create a new post object
router.post('/:id/posts',  async (req,res) => {
    const newPost = new Post({
        post: req.body.post,
        description: req.body.description,
        topic_id: req.params.id
    });
    try {
        await Topic.findById(req.params.id, (err, doc) => {
            doc.posts.push(newPost._id);
            doc.save();
        });
        const post = await newPost.save()
        res.json(post)
    }catch(err) {
        console.log(err)
    }
  });
 
// @route Delete api/Topics/:id/post/:id
// @desc Delete a post
router.delete("/:topicId/posts/:postId", async (req,res) => {
    const {postId} = req.params
    const {topicId} = req.params
    post_obj = await Post.findById(postId)
    
    try{
        await Topic.findById(topicId, (err, doc) => {
            doc.posts = doc.posts.filter(id => id != postId);
            doc.save();
            console.log("after save" +doc)
        });
        await post_obj.remove();
        console.log("post has been removed")
        res.json({success:true})
    } catch(e) {
        res.json({success: false })
    }
});

module.exports = router;
