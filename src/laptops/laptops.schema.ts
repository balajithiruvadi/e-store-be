import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type LaptopDocument = HydratedDocument<Laptop>;

@Schema()
export class Laptop {
  @Prop()
  id: number;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  price: number;

  @Prop()
  rating: number;

  @Prop()
  stock: number;

  @Prop()
  brand: string;

}

export const LaptopSchema = SchemaFactory.createForClass(Laptop);