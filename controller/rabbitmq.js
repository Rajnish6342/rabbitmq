const { publisher } = require('./../rabbitmq');

const publishMessage = async (req, res) => {
  try {
    const msg = req.body.msg;
    await publisher(msg);
    return res.status(200).json({
      message: 'Message sent to RabbitMQ',
      status: 200,
    });
  } catch (error) {
    console.error('Error at publishMessage', error);
  }
}

module.exports = {
  publishMessage
}