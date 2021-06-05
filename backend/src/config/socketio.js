const app = require('./express');
const httpServer = require('http').createServer(app);
const tweet = require('../api/controllers/twit.controller')
const { authorize, ADMIN, LOGGED_USER } = require('../api/middlewares/auth');


const io = require('socket.io')(httpServer, {
    cors: true,
    origins: ["*"]
});


// io.on('connection', function(socket) {

//             socket.auth = false;
//             socket.on('authenticate', function(data) {
//                 //check the auth data sent by the client
//                 checkAuthToken(data.token, function(err, success) {
//                     if (!err && success) {
//                         console.log("Authenticated socket ", socket.id);
//                         socket.auth = true;
//                     }
//                 });
//             });

//             setTimeout(function() {
//                 //If the socket didn't authenticate, disconnect it
//                 if (!socket.auth) {
//                     console.log("Disconnecting socket ", socket.id);
//                     socket.disconnect('unauthorized');
//                 }
//             }, 1000);

//         }



const onConnection = (socket) => {
    console.log('user connected on socket')

    tweet(io, socket);
}

const disconnection = (socket) => {
    console.log('user has disconnected socket')

    tweet(io, socket);
}

io.on("connection", onConnection);
io.on("disconnection", onConnection);


module.exports = {
    io: io,
    server: httpServer
};