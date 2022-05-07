import React from 'react';

const MyitemsShow = ({items}) => {
    const {name, img, description, price, quantity, supplier} = items
    return (
        <div className="product-info mt-20">
          <div className="items-img">
            <img src={img} alt="" />
          </div>
          <div className="item-details font-mono mt-5">
            <h1 className="text-white pb-2 px-5 text-lg">
              <span className="text-xl">Name:</span> {name}
            </h1>
            <h2 className="text-white pb-2 px-5 text-lg">
              <span className="text-xl">Price:</span> {price}
            </h2>
            <h3 className="text-white pb-2 px-5 text-lg">
              <span className="text-xl">Quantity:</span> {quantity}
            </h3>
            <p className="text-white pb-2 px-5 text-lg">
              <span className="text-xl">Supplier:</span> {supplier}
            </p>
            <p className="text-white pb-2 text-sm text-justify px-5 mb-20">
              {description}
            </p>
          </div>
        </div>
    );
};

export default MyitemsShow;