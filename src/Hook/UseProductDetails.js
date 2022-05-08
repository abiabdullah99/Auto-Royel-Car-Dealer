import { useEffect, useState } from "react";

const UseProductDetails = (productId) => {
    const [productDetails, setProductDetails] = useState({});
    useEffect(() => {
        const url = `https://vast-ravine-95722.herokuapp.com/inventory/${productId}`;
    
        fetch(url)
          .then((res) => res.json())
          .then((data) => setProductDetails(data));
      }, [productId]);
    
      return [productDetails];
};

export default UseProductDetails;
