import { Module } from '@nestjs/common';
import { ClovisGateway } from './clovis.gateway';

@Module({
    providers: [ClovisGateway],
})
export class ChatModule {}
