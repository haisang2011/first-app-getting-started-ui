import React from "react";

// interface CartDetailProps {
//   productId: number;
//   productName: string;
//   productImageUrl: string;
//   quantity: number;
// }

// export interface CartProps {
//   cartId: number;
//   userId: number;
//   cartDetails: CartDetailProps
// }

export interface CartDetailProps {
  product_id: number;
  product_name: string;
  product_price: number;
  product_image_url: string;
  quantity: number;
}

export interface CartProps {
  cart_id: number;
  user_id: number;
  cart_details: CartDetailProps[];
}

interface CartValues {
  cartData: CartProps | null;
  setCartData: (cartData: CartProps) => void;
  getCartDataFromApi: () => Promise<void>;
}

const initialValues: CartValues = {
  cartData: null,
  setCartData: null,
  getCartDataFromApi: null,
}

export default React.createContext<CartValues>(initialValues);