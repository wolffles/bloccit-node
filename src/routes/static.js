// const express = require('express');
// const app = express();
// const port = process.env.PORT || 5000;
//
// app.get('/api/home' (req,res) => {
//   res.send({express: 'Hello From Express' });
// });
//
// app.listen(port, () => console.log('Listening on port ${port}'));


// static pages
const express = require("express");
const router = express.Router();
const staticController = require("../controllers/staticController");

router.get("/", staticController.index)

module.exports = router;
