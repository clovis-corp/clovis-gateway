import * as express from 'express';
import { json } from 'body-parser';
import { Server as SocketServer, Socket } from 'socket.io';
import { Server } from 'http';

const app = express();
const server = new Server(app);
const io = new SocketServer(server);

app.use(json());

app.post(
    '/event',
    (req, res) =>
        void console.log(req.body) ||
        (io.emit('event', req.body) && res.send('👍️')),
);

io.on('connection', (socket: Socket) => {
    socket.on('event', (params: object) => {
        io.emit('event', params);
    });
});

const port = +(process.env?.PORT ?? 3000);
server.listen(port, () => console.log('running at', port));
