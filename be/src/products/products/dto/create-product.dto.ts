export class CreateProductDto {
  readonly productName: string;
  readonly productDescription?: string;
  readonly productPrice: number;
  readonly productImage: string;
  readonly productCategory: string;
}
