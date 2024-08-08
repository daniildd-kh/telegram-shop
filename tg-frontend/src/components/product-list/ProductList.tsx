import React, { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log('Успешный запрос')
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/products`);
        if (!response.ok) {
          throw new Error("Ошибка запроса к серверу");
        }
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: {product.price} руб.</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
