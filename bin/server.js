const app = require('../src/app');
const debug = require('debug')('balta:server');
const http = require('http');

let normalizePort = function(value){
    let port = parseInt(value, 10);

    if (isNaN(port)) return value;
    if (port >= 0) return port;
    
    return false;
};

let onListening = function(){
    let addr = server.address();
    let bind = typeof addr === 'string' ? 'Pipe ' + addr : 'Port ' + addr.port;
    debug('Listening on ' + bind);
};

let onError = function(error){

    if (error.syscall !== 'listen') throw error;
    
    let bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

    switch(error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
            break;
    }

};

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

console.log(`API running at port: ${port}`);
