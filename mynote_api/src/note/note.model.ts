import {Field, ObjectType} from "@nestjs/graphql";
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document, Schema as MongooseSchema} from "mongoose";

@ObjectType()
@Schema()
export class Note {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId

  @Field(() => String)
  @Prop()
  title: string

  @Field(() => String)
  @Prop()
  content: string
}

export type NoteDocument = Note & Document

export const NoteSchema = SchemaFactory.createForClass(Note)