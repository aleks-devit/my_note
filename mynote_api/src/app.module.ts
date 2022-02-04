import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

const url = process.env.MONGO_URL || 'localhost';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(`mongodb://${url}:27017/my_note`),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
