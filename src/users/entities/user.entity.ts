import { ObjectType, Field } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
@ObjectType()
export class User {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId | string;

  @Prop({
    unique: true,
  })
  @Field(() => String)
  email: string;

  @Prop()
  @Field(() => String)
  firstName: string;

  @Prop()
  @Field(() => String)
  lastName: string;

  @Prop()
  @Field(() => String)
  role: string;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
