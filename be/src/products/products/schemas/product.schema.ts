import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Product extends Document {
  @Prop({ required: true })
  productName: string;

  @Prop()
  productDescription: string;

  @Prop({ required: true })
  productPrice: number;

  @Prop()
  productImage: string;

  @Prop({ required: true })
  productCategory: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
