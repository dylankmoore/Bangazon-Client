import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getCartDetails, getProductById } from '../api/productData';

function ShoppingCartPage({ customerId }) {
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

  useEffect(() => {
    async function fetchProductDetails() {
      const productsWithDetails = await Promise.all(
        cartProducts.map(async (product) => {
          const productDetails = await getProductById(product.productId);
          return { ...product, name: productDetails.productName };
        }),
      );
      setCartProducts(productsWithDetails);
    }

    if (cartProducts.length > 0) {
      fetchProductDetails();
    }
  }, [cartProducts]);

  return (
    <div><br />
      <h2>Shopping Cart</h2><br />
      <ul>
        {cartProducts.map((product) => (
          <li key={product.productId}>
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

ShoppingCartPage.propTypes = {
  customerId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default ShoppingCartPage;
