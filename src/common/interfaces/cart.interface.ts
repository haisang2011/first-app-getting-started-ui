export interface ICartDetail {
  product_id: number;
  product_name: string;
  product_price: number;
  product_image_url: string;
  quantity: number;
}

interface ICart {
  cart_id: number;
  user_id: number;
  cart_details: ICartDetail[];
}

export default ICart;