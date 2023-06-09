const express = require('express');
const router = express.Router();

const queueController = require('../controllers/queueControllers');

router.post('/add', queueController.createQueue);

router.get('/getAll', queueController.getAllQueues);

router.get('/get/:id', queueController.getQueueById);

router.put('/take', queueController.takeQueueById, (req, res) => {
    // Emit the socket event
    req.app.get('io').emit('queueTaken', 'Queue taken');
  
    res.status(200).json({ message: 'Queue entry updated successfully' });
  });

router.put('/finish/:id', queueController.finishQueueById);

router.get('/getByTeller', queueController.getQueueByTeller);

module.exports = router;
