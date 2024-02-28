import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import { getProducts } from '../api/productData';

function Home() {
  const { user } = useAuth();
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    async function fetchLatestProducts() {
      try {
        const products = await getProducts();
        setLatestProducts(products);
      } catch (error) {
        console.error('Error fetching latest products:', error);
      }
    }

    fetchLatestProducts();
  }, []);

  function handleClick() {}

  return (
    <div id="home-container" className="text-center">
      <br />
      <h1>Welcome, {user.fbUser.displayName}! </h1>
      <br /><br />
      <h2>Latest Products:</h2>
      <br />
      <div className="product-container">
        {latestProducts.map((product) => (
          <div key={product.id} className="product-item">
            <Link href={`/products/${product.id}`} passHref>
              <button type="button" className="details-btn" onClick={handleClick}>{product.name}</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
