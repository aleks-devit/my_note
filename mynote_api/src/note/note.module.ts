import {Module} from '@nestjs/common';
import {NoteService} from './note.service';
import {NoteResolver} from './note.resolver';
import {MongooseModule} from "@nestjs/mongoose";
import {Note, NoteSchema} from "./note.model";

@Module({
  imports: [
    MongooseModule.forFeature([{name: Note.name, schema: NoteSchema}])
  ],
  providers: [NoteService, NoteResolver]
})
export class NoteModule {}
