import type { Product } from "@/products/data/products";

export interface CartItem {
  product:  Product;
  quantity: number;
}