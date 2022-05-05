import React from 'react';
import Error from '../../image/Erorr.png'
import './NotFound.css'
const NotFound = () => {
    return (
        <div className="erorr-info">
          <img src={Error} alt="" />
          <div className="error-details">
            <p>
              <span>Error</span> 404
            </p>
            <h1>
              Oops! The page you're l<span>ooking for</span> isn't here.
            </h1>
            <p>
              You might have the wrong address, or the page{" "}
              <span>may have moved</span>
            </p>
          </div>
        </div>
      );
};

export default NotFound;