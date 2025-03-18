const express = require('express');
const kafka = require('kafka-node');
const router = express.Router();

// Kafka setup
const client = new kafka.KafkaClient({ kafkaHost: process.env.KAFKA_BROKER });
const producer = new kafka.Producer(client);

producer.on('ready', () => {
    console.log('Kafka Producer is connected and ready.');
});

producer.on('error', (err) => {
    console.error('Kafka Producer error:', err);
});

// Route to record attendance and produce Kafka message
router.post('/', (req, res) => {
    const { studentId, status, date } = req.body;

    if (!studentId || !status || !date) {
        return res.status(400).json({ message: 'Invalid request data' });
    }

    const event = {
        topic: 'attendance-events',
        messages: JSON.stringify({ studentId, status, date })
    };

    // Send message to Kafka
    producer.send([event], (err, data) => {
        if (err) {
            console.error('Error sending message to Kafka:', err);
            return res.status(500).json({ message: 'Error producing Kafka message', error: err });
        }
        console.log('Message sent to Kafka:', data);
        res.status(200).json({ message: 'Attendance recorded and Kafka event sent', data: { studentId, status, date } });
    });
});

module.exports = router;
