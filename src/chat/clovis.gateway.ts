import {
    WebSocketGateway,
    WebSocketServer,
    SubscribeMessage,
    OnGatewayConnection,
    OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class ClovisGateway
    implements OnGatewayConnection<Socket>, OnGatewayDisconnect {
    @WebSocketServer() server: Server;

    async handleConnection() {
        console.log('Connection');
    }

    async handleDisconnect() {
        console.log('2');
    }

    @SubscribeMessage('chat')
    async onChat(client, message) {
        client.broadcast.emit('chat', message);
    }
}
