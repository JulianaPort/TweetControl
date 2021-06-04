const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const compress = require('compression');
const methodOverride = require('method-override');
const socketio = require('socket.io');
const http = require('http');
const cors = require('cors');
const helmet = require('helmet');
const passport = require('passport');
const routes = require('../api/routes/v1');
const {
  logs
} = require('./vars');
const strategies = require('./passport');
const error = require('../api/middlewares/error');

/**
 * Express instance
 * @public
 */
const app = express();

const server = http.createServer(app);
const io = socketio(server);



// request logging. dev: console | production: file
app.use(morgan(logs));

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// gzip compression
app.use(compress());

// lets you use HTTP verbs such as PUT or DELETE
// in places where the client doesn't support it
app.use(methodOverride());

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

// enable authentication
app.use(passport.initialize());
passport.use('jwt', strategies.jwt);
passport.use('facebook', strategies.facebook);
passport.use('google', strategies.google);

// mount api v1 routes
app.use('/api/v1', routes)

// if error is not an instanceOf APIError, convert it.
app.use(error.converter);

// catch 404 and forward to error handler
app.use(error.notFound);

// error handler, send stacktrace only during development
app.use(error.handler);


module.exports = server;
