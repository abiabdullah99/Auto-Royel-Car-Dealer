import { useEffect, useState } from "react";

const useProducts = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/inventory";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return [product, setProduct];
};

export default useProducts;
