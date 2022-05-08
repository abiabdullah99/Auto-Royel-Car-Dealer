import { Link } from "react-router-dom";
import useProducts from "../../Hook/UseProducts";
const MangeInventory = () => {
  const [product, setProduct] = useProducts();
  const handleDeletProductItem = (id) => {
    const proced = window.confirm("Are Your Sure Delete Items");
    if (proced) {
      const url = `https://vast-ravine-95722.herokuapp.com/inventory/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const reamingData = product.filter((product) => product._id !== id);
          setProduct(reamingData);
        });
    }
  };
  return (
    <section className="products pb-20">
      <h2 className="text-white text-center text-2xl md:text-4xl font-semibold pb-20 font-mono">
        Latest Veh<span>icles</span> on Sale
      </h2>
      
      <div className="product-container">
        {product.map((item) => (
          <div className="product-info relative" data-aos="zoom-out-left" data-aos-duration="2000" key={item._id}>
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
                <span>{item.description}</span>
              </p>
            </div>
            <button
              onClick={() => handleDeletProductItem(item._id)}
              className="absolute bottom-0 update-btn"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <Link to="/additems">
        <h1 className="manage-btn font-mono">Add Items</h1>
      </Link>
    </section>
  );
};

export default MangeInventory;
