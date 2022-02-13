require('dotenv').config();

const config = {
  JobQueueName: process.env.JOB_QUEUE_NAME,
  ServerPort: process.env.SERVER_PORT,
}

module.exports = config;