const Thread = require('../models').Thread;
const Post = require('../models').Post;

module.exports = {
  create(req, res) {
    return Thread
      .create({
        title: req.body.title,
        forumId: req.params.forumId,
      })
      .then(thread => res.status(201).send(thread))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
  return Thread
      .findAll({
        include: [{
          model: Post,
          as: 'posts',
        }],
      })
      .then(threads => res.status(200).send(threads))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return Thread
      .findById(req.params.threadId, {
        include: [{
          model: Post,
          as: 'posts',
        }],
      })
      .then(thread => {
        if (!thread) {
          return res.status(404).send({
            message: 'Forum Not Found',
          });
        }
        return res.status(200).json(thread);
      })
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return Thread
      .findById(req.params.forumId, {
        include: [{
          model: Thread,
          as: 'threads',
        }],
      })
      .then(thread => {
        if (!thread) {
          return res.status(404).send({
            message: 'Thread Not Found',
          });
        }
        return thread
          .update({
            title: req.body.title || forum.title,
          })
          .then(() => res.status(200).json(thread))  // Send back the updated todo.
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  delete(req, res) {
    return Thread
      .findById(req.params.threadId)
      .then(thread => {
        if (!thread) {
          return res.status(400).send({
            message: 'Thread Not Found',
          });
        }
        return thread
          .destroy()
          .then(() => res.status(200).send({ message: 'Thread deleted'}))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};