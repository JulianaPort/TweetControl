// make bluebird default Promise
Promise = require('bluebird'); // eslint-disable-line no-global-assign
const { port, env } = require('./config/vars');
const logger = require('./config/logger');

const mongoose = require('./config/mongoose');

const { server } = require('./config/socketio')


// open mongoose connection
mongoose.connect();


server.listen(port, () => logger.info(`server started on port ${port} (${env})`));