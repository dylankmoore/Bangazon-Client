/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../utils/context/authContext';
import { getProducts, searchProducts } from '../api/productData';

function Home() {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);
  const [customerId, setCustomerId] = useState('');
  const router = useRouter();
  const { search } = router.query;

  useEffect(() => {
    const storedCustomerId = localStorage.getItem('customerId');
    if (storedCustomerId) {
      setCustomerId(storedCustomerId);
    }
  }, []);

  useEffect(() => {
    async function fetchProducts() {
      try {
        let fetchedProducts;
        if (search) {
          fetchedProducts = await searchProducts(search);
        } else {
          fetchedProducts = await getProducts();
        }
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts();
  }, [search]);

  return (
    <div id="home-container" className="text-center">
      <br /><br />
      <h1>Welcome, {user?.fbUser?.displayName || 'Guest'}!</h1><br />
      <h2>{search ? `Search Results for "${search}":` : 'Latest Products:'}</h2><br /><br />
      <div className="product-container">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-item">
              <img src={product.imageURL} alt={product.name} style={{ maxWidth: '200px', maxHeight: '200px', marginBottom: '10px' }} />
              {/* Include customerId in the URL if available */}
              <Link href={`/products/${product.id}${customerId ? `?customerId=${customerId}` : ''}`} passHref>
                <button type="button" className="details-btn">{product.name}</button>
              </Link>
            </div>
          ))
        ) : (
          <p>No products found!</p>
        )}
      </div>
    </div>
  );
}

export default Home;
