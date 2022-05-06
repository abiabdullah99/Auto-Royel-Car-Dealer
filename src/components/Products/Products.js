import { Link } from "react-router-dom";
import useProducts from "../../Hook/UseProducts";
import "./Products.css";
const Products = () => {
  const [product] = useProducts();

  return (
    <section className="products">
      <h2 className="text-white text-center text-2xl md:text-4xl font-semibold pb-20 font-mono">
        Latest Veh<span>icles</span> on Sale
      </h2>
      <div className="product-container">
        {product.slice(0, 6).map((item) => (
          <div className="product-info relative" key={item._id}>
            <div className="items-img">
              <img src={item.img} alt="" />
            </div>
            <div className="item-details font-mono mt-5">
              <h1 className="text-white pb-2 px-5 text-lg">
                <span className="text-xl">Name:</span> {item.name}
              </h1>
              <h2 className="text-white pb-2 px-5 text-lg">
                <span className="text-xl">Price:</span> {item.price}
              </h2>
              <h3 className="text-white pb-2 px-5 text-lg">
                <span className="text-xl">Quantity:</span> {item.quantity}
              </h3>
              <p className="text-white pb-2 px-5 text-lg">
                <span className="text-xl">Supplier:</span> {item.supplier}
              </p>
              <p className="text-white pb-2 text-sm text-justify px-5 mb-20">
                {item.description}
              </p>
            </div>
            <Link to="/updatedetails">
              <button className="absolute bottom-0 update-btn">Up Date</button>
            </Link>
          </div>
        ))}
      </div>
      <Link to="/manageItems">
        <h1 className="manage-btn font-mono">Manage Inventory</h1>
      </Link>
    </section>
  );
};

export default Products;
