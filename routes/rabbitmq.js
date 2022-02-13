const router = require('express').Router();
const { publishMessage } = require('../controller/rabbitmq');

router.post('/', publishMessage)

module.exports = router;