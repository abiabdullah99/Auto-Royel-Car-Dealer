import React from 'react';
import { useParams } from 'react-router-dom';
import UseProductDetails from '../../Hook/UseProductDetails';

const UpdateDetails = () => {
    const { productId } = useParams();
    const [productDetails] = UseProductDetails(productId)
    console.log(productDetails)
    return (
        <div>
           
        </div>
    );
};

export default UpdateDetails;