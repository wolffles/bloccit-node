const express = require('express');
const mongoose = require('mongoose');
const path = require('path');


const home = require('./routes/api/home');
const topics = require('./routes/api/topics');
const posts = require('./routes/api/posts');

const app = express();

//Bodyparser Middleware
app.use(express.json());

//DB config
const db = require('./config/keys').mongoURI

//connect to Mongo
mongoose.connect(db,{ useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected...')).catch(err => console.log(err));

//use routes... anything that refers to api/tasks should refer
// to the tasks variable commented out above
app.use('/api/home', home);
app.use('/api/topics', topics);
app.use('/api/posts', posts);


//Serve Static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));
 
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

