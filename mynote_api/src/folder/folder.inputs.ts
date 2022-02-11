import {Field, InputType} from "@nestjs/graphql";
import {Schema as MongooseSchema} from 'mongoose';

@InputType()
export class CreateFolderInput {
  @Field(() => String)
  title: string
}

@InputType()
export class ListFolderInput {
  @Field(() => String, {nullable: true})
  _id?: MongooseSchema.Types.ObjectId

  @Field(() => String, {nullable: true})
  title?: string

  @Field(() => String, {nullable: true})
  childrenFolders?: MongooseSchema.Types.ObjectId[]

  @Field(() => String, {nullable: true})
  childrenNotes?: MongooseSchema.Types.ObjectId[]
}

@InputType()
export class UpdateFolderInput {
  @Field(() => String)
  _id?: MongooseSchema.Types.ObjectId

  @Field(() => String, {nullable: true})
  title?: string

  @Field(() => String, {nullable: true})
  childrenFolders?: MongooseSchema.Types.ObjectId[]

  @Field(() => String, {nullable: true})
  childrenNotes?: MongooseSchema.Types.ObjectId[]
}