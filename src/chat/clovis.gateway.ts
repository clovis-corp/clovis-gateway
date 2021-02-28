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
        console.log('Disconnect');
    }

    @SubscribeMessage('event')
    async onChat(client: Socket, params: object) {
        console.log(params);
        client.broadcast.emit('chat', params);
    }
}
