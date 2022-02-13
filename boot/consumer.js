const connect = require('./../rabbitmq/connection')
const config = require('../config/config')

const consumer = async () => {
  try {
    const connection = await connect();
    const channel = await connection.createChannel();
    await channel.assertQueue(config.JobQueueName, { durable: false });
    channel.consume(config.JobQueueName, msg => {
      console.log(msg.content.toString());
      channel.ack(msg);
    })
    console.log(' [*] Waiting for messages. To exit press CTRL+C');
  } catch (error) {
    console.error('Error at consumer', error);
  }
}

module.exports = consumer;