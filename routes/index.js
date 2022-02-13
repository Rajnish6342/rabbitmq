const rabbitmq = require('./rabbitmq');
const routes = (app) => {
  app.use('/rabbitmq', rabbitmq);
  app.use('/', (req, res) => {
    res.status(200).json({
      message: 'Welcome to the API',
      status: 200,
    });
  });
}

module.exports = routes;