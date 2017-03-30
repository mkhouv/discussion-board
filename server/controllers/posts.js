const Post = require('../models').Post;

module.exports = {
  create(req, res) {
    return Post
      .create({
        content: req.body.content,
        threadId: req.params.threadId,
      })
      .then(post => res.status(201).send(post))
      .catch(error => res.status(400).send(error));
  },
};