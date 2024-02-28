import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ProductDetails from '../../components/products/ProductDetails';
import { getProductById } from '../../api/productData';

function ProductDetailPage() {
  const router = useRouter();
  const { productId } = router.query;
  const [product, setProduct] = useState(null);

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
        <ProductDetails product={product} />
      ) : (<p>Loading...</p>)}
    </div>
  );
}

export default ProductDetailPage;
