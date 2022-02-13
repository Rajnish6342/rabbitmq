const amqplib = require('amqplib');

const connect = async () => {
  try {
    const connection = await amqplib.connect('amqp://rabbitmq');
    return connection;
  } catch (error) {
    console.error('Error at connection',error);
  }
}


module.exports = connect