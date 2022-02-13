import {Field, ObjectType} from "@nestjs/graphql";
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document, Schema as MongooseSchema} from "mongoose";

@ObjectType()
@Schema()
export class Note {
  @Field(() => String, { nullable: true })
  _id: MongooseSchema.Types.ObjectId

  @Field(() => String, { nullable: true })
  @Prop()
  title: string

  @Field(() => String, { nullable: true })
  @Prop()
  folderPathname: string

  @Field(() => String, { nullable: true })
  @Prop()
  content: string
}

export type NoteDocument = Note & Document

export const NoteSchema = SchemaFactory.createForClass(Note)