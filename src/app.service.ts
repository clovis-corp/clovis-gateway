import { Injectable } from '@nestjs/common';
import { io } from 'socket.io-client';

@Injectable()
export class AppService {
    getHello(): string {
        return 'Hello World!';
    }

    emitCommand(command: object): void {
        const wsClient = io('https://clovis-gateway.herokuapp.com/', {
            reconnectionDelayMax: 10000,
        }).connect();

        wsClient.emit('event', command);

        wsClient.disconnect();
    }
}
