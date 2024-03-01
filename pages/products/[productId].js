import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ProductDetails from '../../components/products/ProductDetails';
import { getProductById, addProductToCart } from '../../api/productData';

function ProductDetailPage() {
  const router = useRouter();
  const { productId, customerId } = router.query;
  const [product, setProduct] = useState(null);

  const handleAddToCart = async () => {
    console.warn(customerId, productId);
    console.warn('Product ID:', product.id);
    console.warn('Customer ID:', customerId);

    try {
      await addProductToCart(productId, customerId);
      console.warn(customerId, productId);
      router.push(`/cart?customerId=${customerId}`);
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

  useEffect(() => {
    async function fetchProduct() {
      try {
        const fetchedProduct = await getProductById(productId);
        setProduct(fetchedProduct);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    }

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  return (
    <div>
      {product ? (
        <ProductDetails product={product} handleAddToCart={handleAddToCart} />
      ) : (<p>Loading...</p>)}
    </div>
  );
}

export default ProductDetailPage;
