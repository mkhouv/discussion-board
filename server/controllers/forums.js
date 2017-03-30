const Forum = require('../models').Forum;
const Thread = require('../models').Thread;
const Post = require('../models').Post;

module.exports = {
  create(req, res) {
    return Forum
      .create({
        title: req.body.title,
      })
      .then(forum => res.status(201).json(forum))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Forum
      .findAll({
        include: [{
          model: Thread,
          as: 'threads',
          include: [{
              model: Post,
              as: 'posts',
            }],
        }],
      })
      .then(forums => res.status(200).json(forums))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return Forum
      .findById(req.params.forumId, {
        include: [{
          model: Thread,
          as: 'threads',
        }],
      })
      .then(forum => {
        if (!forum) {
          return res.status(404).send({
            message: 'Forum Not Found',
          });
        }
        return res.status(200).json(forum);
      })
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return Forum
      .findById(req.params.forumId, {
        include: [{
          model: Thread,
          as: 'threads',
        }],
      })
      .then(forum => {
        if (!forum) {
          return res.status(404).send({
            message: 'Forum Not Found',
          });
        }
        return forum
          .update({
            title: req.body.title || forum.title,
          })
          .then(() => res.status(200).json(forum))  // Send back the updated todo.
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  delete(req, res) {
    return Forum
      .findById(req.params.forumId)
      .then(forum => {
        if (!forum) {
          return res.status(400).send({
            message: 'Forum Not Found',
          });
        }
        return forum
          .destroy()
          .then(() => res.status(200).send({ message: 'Forum deleted'}))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};