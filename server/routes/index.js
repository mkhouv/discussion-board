const forumsController = require('../controllers').forums;
const threadsController = require('../controllers').threads;
const postsController = require('../controllers').posts;
const express = require('express');
const appEx = express();
const path = require('path');

module.exports = (app) => {

  app.get('/index.html', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../../client/index.html'));
  });

  app.get('/index.bundle.js', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../../dist/index.bundle.js'));
  });

  app.get('/css/bootstrap.min.css', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../../css/bootstrap.min.css'));
  });
  
  app.get('/font/roboto/Roboto-Regular.woff2', (req, res) => {
    let name = req.params.name;
    console.log('name')
    res.sendFile(path.resolve(__dirname + '/../../font/roboto/Roboto-Regular.woff2'));
  });

  app.get('/css/mdb.min.css', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../../css/mdb.min.css'));
  });

  app.get('/css/style.css', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../../css/style.css'));
  });

  app.get('/js/tether.min.js', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../../js/tether.min.js'));
  });

  app.get('/js/bootstrap.min.js', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../../js/bootstrap.min.js'));
  });

  app.get('/js/mdb.min.js', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../../js/mdb.min.js'));
  });

  app.get('/thread/dist/thread.bundle.js', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../../dist/thread.bundle.js'));
  });

  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Forums API!',
  }));

  app.get('/thread/:threadId', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../../thread.html'));
  });

  app.get('/newthread.html', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../../newthread.html'));
  });

  app.post('/api/forums', forumsController.create);
  app.get('/api/forums', forumsController.list);
  app.get('/api/forums/:forumId', forumsController.retrieve);
  app.put('/api/forums/:forumId', forumsController.update);
  app.delete('/api/forums/:forumId', forumsController.delete);

  app.post('/api/forums/:forumId/threads', threadsController.create);
  app.get('/api/forums/:threadId', threadsController.list);

  app.post('/api/forums/:forumId/:threadId', postsController.create);
  app.use(express.static(path.resolve(__dirname, '/../../')));
};