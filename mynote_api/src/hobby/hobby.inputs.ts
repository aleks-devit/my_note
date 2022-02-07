import {Schema as MongooseSchema} from 'mongoose';

export class CreateHobbyInput {
  name: string;
}

export class ListHobbyInput {
  _id?: MongooseSchema
  name?: string
  hobbies?: MongooseSchema.Types.ObjectId[]
}

export class UpdateHobbyInput {
  _id: MongooseSchema.Types.ObjectId
  name?: string
  hobbies?: MongooseSchema.Types.ObjectId[]
}