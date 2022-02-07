import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { HobbyModule } from './hobby/hobby.module';
import { PersonService } from './person/person.service';
import { HobbyService } from './hobby/hobby.service';
import {PersonModule} from "./person/person.module";

const url = process.env.MONGO_URL || 'localhost';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(`mongodb://root:root@${url}:27017/my_note`),
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
    }),
    PersonModule,
    HobbyModule,
  ],
  controllers: [AppController],
  providers: [AppService, PersonService, HobbyService],
})
export class AppModule {}
