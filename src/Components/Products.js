import { useEffect, useState } from "react";
import { ClockLoader } from "react-spinners";
import HashLoader from "react-spinners/HashLoader";

const Products = () => {
  const [prd, setPrd] = useState([]);
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);

    const fetchProducts = async () => {
      const data = await (await fetch("https://dummyjson.com/products")).json();
      console.log(data.products);
      setPrd(data.products);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <h1>Products</h1>
      {/* <button className="btn btn-danger" onClick={fetchProducts}>
        Show Products
      </button> */}

      {loading ? (
        // <div className="spinner-border" role="status">
        //   <span className="visually-hidden">Loading...</span>
        // </div>
        <div className="d-flex justify-content-center ">
            <ClockLoader color="#36d7b7" />
        </div>
      ) : (
        <>
          {prd.map((item) => {
            return (
              <div key={item.id}>
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={item.thumbnail}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <a href="#" className="btn btn-primary">
                      Buy for ${item.price}
                    </a>
                    <a href="#" className="btn btn-secondary">
                      {item.id}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};

export default Products;
