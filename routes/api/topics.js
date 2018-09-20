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
    // console.log("works")
});

router.get('/:id',(req,res) => {
    Topic.findById(req.params.id).then(topics => res.json(topics))
})

router.get('/:id/posts', (req,res) => {
    const {id} = req.params
   Topic.findById(id)
    .then(topic => res.json(topic.posts));
   
})

router.post('/:id/posts', (req,res) => {
    const { id } = req.params
    console.log(id);
    
    const newPost = new Post({
        post: req.body.post,
        description: req.body.description,
        topic_id: id
    })

    const topic = Topic.findById(id).then(topics => res.json(topics))
    
    console.log(topic.posts)// and I don't understand why my topic object is always undefined

    //need to save topic object
    newPost.save().then(post => res.json(post));
});


//@route Post api/Topics
//@desc Post All Topics
//@access Public 
 // this / is already the end point for api/topics/ since your already in the route.
router.post("/", (req,res) => {
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

module.exports = router;
