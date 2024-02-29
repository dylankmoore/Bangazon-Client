/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getCartDetails } from '../api/productData';

function ShoppingCartPage() {
  const router = useRouter();
  const { customerId } = router.query;
  console.warn(router.query);
  const [cartProducts, setCartProducts] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    async function fetchCartProducts() {
      try {
        const cartData = await getCartDetails(customerId);
        setCartProducts(cartData.products);
        setTotalAmount(cartData.totalAmount);
      } catch (error) {
        console.error('Error fetching cart products:', error);
      }
    }

    fetchCartProducts();
  }, [customerId]);

  return (
    <div><br />
      <h1>Shopping Cart</h1><br />
      <ul>
        {cartProducts.map((product) => (
          <li key={product.id}>
            <div>
              <img src={product.image} alt={product.name} style={{ width: '100px', height: '100px' }} />
            </div>
            <div>
              <p>{product.name}</p>
              <p>Price: ${product.price}</p>
            </div>
          </li>
        ))}
      </ul>
      <p>Total Amount: ${totalAmount}</p>
    </div>
  );
}
export default ShoppingCartPage;
