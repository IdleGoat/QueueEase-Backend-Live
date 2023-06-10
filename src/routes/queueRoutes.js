const express = require('express');
const router = express.Router();

const queueController = require('../controllers/queueControllers');

module.exports = function (io) {
  router.post('/add', queueController.createQueue);

  router.get('/getAll', (req, res) => {
    queueController.getAllQueues(req, res, io);
  });

  router.get('/get/:id', queueController.getQueueById);

  router.put('/take', queueController.takeQueueById, (req, res) => {
    // Emit the socket event
    io.emit('queueUpdated');
    console.log('Queue taken');
    res.status(200).json({ message: 'Queue taken' });
  });

  router.put('/finish/:id', queueController.finishQueueById);

  router.get('/getWaitingQueue', queueController.getWaitingQueue);

  router.get('/getByTeller', queueController.getQueueByTeller);

  return router;
};
