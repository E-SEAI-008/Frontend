import { useEffect, useState } from 'react';
import type { Product } from '../types';
import { z } from "zod/v4";
import { ProductSchema } from '../schemas';

function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/products`);
        if(!response.ok) throw new Error("Failed to fetch products!");

        const responseData = await response.json();

        // const result = z.array(ProductSchema).safeParse(responseData);
        const {success, error, data} = z.array(ProductSchema).safeParse(responseData);
        if(!success) throw new Error(z.prettifyError(error));

        setProducts(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.title} - {p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
