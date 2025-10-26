import { products } from "@/products/data/products";
import { ItemCard } from "@/shopping-cart/components/ItemCard";
import { CartItem } from "@/shopping-cart/interfaces/cartItems.interface";
import { cookies } from "next/headers";


export const metadata = {
 title: 'Shopping cart',
 description: 'SEO Title',
};

const getProductsInCart = (cart: {[id: string]: number}) => {
    const productsInCart: CartItem[] = [];

    for (const id of Object.keys(cart)) {
        const product = products.find((product) => product.id === id);
        
        if(!product) return;

        productsInCart.push({product, quantity: cart[id] })
    }
    return productsInCart;
}

const CartPage = async () => {

    const cookiesStore = await cookies();

    const cart = JSON.parse(cookiesStore.get('cart')?.value ?? '{}') as {[id: string]: number};

    const productsInCart = getProductsInCart(cart);

  return (
    <div className="p-2">
      <div className="border-b-2 border-blue-800 p-2 mb-2">
        <h1 className="text-3xl font-bold text-blue-700">Products In Cart</h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center">
        {productsInCart !== undefined && productsInCart.length > 0 ? (
          <>
            <div className="flex flex-col gap-3">
              {productsInCart?.map(({ product, quantity }) => (
                <ItemCard
                  key={product.id}
                  product={product}
                  quantity={quantity}
                />
              ))}
            </div>

            <div></div>
          </>
        ) : (
          <h2 className="text-2xl text-red-700">The cart is empty, add a new product</h2>
        )}
      </div>
    </div>
  );
}

export default CartPage