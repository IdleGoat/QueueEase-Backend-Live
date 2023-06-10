const express = require('express');
const router = express.Router();
const { io } = require('../../app');


const queueController = require('../controllers/queueControllers');

router.post('/add', queueController.createQueue);

router.get('/getAll', queueController.getAllQueues, (req, res) => {
  // Emit the socket event
  io.emit('queueUpdated');
  console.log('Queue taken');
  res.status(200).json({ message: 'Queue taken' });
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

module.exports = router;
