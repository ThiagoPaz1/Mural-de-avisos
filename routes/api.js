const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const posts = require('../model/post');

router.use(bodyParser.json());

router.get('/all', (req,res) => {
  res.json(JSON.stringify(posts.getAll()))
});

router.post('/new', (req, res) => {
  const { title } = req.body;
  const { description } = req.body;

  posts.newPost(title, description);

  res.status(201).json({message: 'New post created sucefully.'})
});

module.exports = router;