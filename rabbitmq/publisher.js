const connect  = require('./connection')
const config = require('../config/config')

const publisher = async (msg) => {
  try {
    const connection = await connect();
    const channel = await connection.createChannel();
    await channel.assertQueue(config.JobQueueName, { durable: false });
    channel.sendToQueue(config.JobQueueName, Buffer.from(msg));
    setTimeout(() => {
      connection.close();
    }, 500);
  } catch (error) {
    console.error(error);
  }
}

module.exports = publisher;