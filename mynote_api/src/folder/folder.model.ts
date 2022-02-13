import {Field, ObjectType} from "@nestjs/graphql";
import {Document, Schema as MongooseSchema} from 'mongoose';
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Note} from "../note/note.model";

@ObjectType()
@Schema()
export class Folder {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId

  @Field(() => String)
  @Prop()
  title: string

  @Field(() => String)
  @Prop()
  pathname: string

  @Field(() => Folder)
  @Prop({type: MongooseSchema.Types.ObjectId, ref: Folder.name})
  parentFolderId: MongooseSchema.Types.ObjectId | Folder

  @Field(() => [Folder])
  @Prop({type: [MongooseSchema.Types.ObjectId], ref: Folder.name})
  childrenFolders: MongooseSchema.Types.ObjectId[] | Folder[]

  @Field(() => [Note])
  @Prop({type: [MongooseSchema.Types.ObjectId], ref: Note.name})
  childrenNotes: MongooseSchema.Types.ObjectId[] | Note[]
}

export type FolderDocument = Folder & Document

export const FolderSchema = SchemaFactory.createForClass(Folder)