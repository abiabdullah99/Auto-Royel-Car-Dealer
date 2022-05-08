import { useEffect, useState } from "react";
const useProducts = () => {
  const [product, setProduct] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
    const url = "https://vast-ravine-95722.herokuapp.com/inventory";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
    setLoading(true);
  }, []);
  return [product, setProduct, isLoading];
};

export default useProducts;
