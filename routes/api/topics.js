const express = require('express')
const router = express.Router()

// Topic model 
const Topic = require('../../models/Topic');

//@route Get api/Topics
//@desc Get All Topics
//@access Public 

router.get("/topics/", (req,res) => {
    //returns a promis so you have to use.then
    Topic.find()
        .sort({date: -1})
        .then(topics => res.json(topics))
})

module.exports=router;
