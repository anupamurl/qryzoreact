import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ required: true })
  googleId: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  name: string;

  @Prop()
  picture: string;

  @Prop()
  shopName: string;

  @Prop()
  address: string;

  @Prop()
  phone: string;

  @Prop()
  city: string;

  @Prop()
  state: string;

  @Prop()
  zipCode: string;

  @Prop()
  shopLogo: string;

  @Prop({ default: false })
  profileCompleted: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);