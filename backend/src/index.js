const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const kafka = require('kafka-node');
dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());

// Kafka Consumer Setup
const client = new kafka.KafkaClient({ kafkaHost: process.env.KAFKA_BROKER });
const consumer = new kafka.Consumer(
    client,
    [{ topic: 'attendance-events', partition: 0 }],
    { autoCommit: true }
);

consumer.on('message', (message) => {
    console.log('Received Kafka message:', JSON.parse(message.value));
    // Process the message further if needed
});

consumer.on('error', (err) => {
    console.error('Error in Kafka consumer:', err);
});

// Routes
app.use('/attendance', require('./routes/attendance'));
app.use('/payments', require('./routes/payments'));

app.get('/', (req, res) => {
    res.send('Welcome to the IES Project API!');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
