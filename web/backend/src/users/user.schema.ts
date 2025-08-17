import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ required: true, unique: true })
  googleId: string;

  @Prop({ required: true, unique: true, lowercase: true })
  email: string;

  @Prop({ required: true, trim: true })
  name: string;

  @Prop()
  picture: string;

  @Prop({ trim: true })
  shopName: string;

  @Prop({ trim: true })
  address: string;

  @Prop({ trim: true })
  phone: string;

  @Prop({ trim: true })
  city: string;

  @Prop({ trim: true })
  state: string;

  @Prop({ trim: true })
  zipCode: string;

  @Prop()
  shopLogo: string;

  @Prop({ default: false })
  profileCompleted: boolean;

  @Prop({ default: Date.now })
  lastLoginAt: Date;

  @Prop({ default: 0 })
  qrCodesGenerated: number;
}

export const UserSchema = SchemaFactory.createForClass(User);

// Add indexes for better query performance
UserSchema.index({ email: 1 });
UserSchema.index({ googleId: 1 });
UserSchema.index({ profileCompleted: 1 });
UserSchema.index({ createdAt: -1 });