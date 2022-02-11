import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { HobbyModule } from './hobby/hobby.module';
import {PersonModule} from "./person/person.module";
import { FolderModule } from './folder/folder.module';
import { NoteModule } from './note/note.module';

const url = process.env.MONGO_URL || 'localhost';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(`mongodb://db/test_db`),
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
    }),
    PersonModule,
    HobbyModule,
    FolderModule,
    NoteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
