import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ItemsDocument = HydratedDocument<Items>;

@Schema()
export class Items {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true })
  surname: string;

  @Prop({ type: Number, required: true })
  age: number;

  @Prop({ type: String, required: true })
  description: string;
}

export const ItemsSchema = SchemaFactory.createForClass(Items);
