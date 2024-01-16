import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Navbar from "./Navbar";

export default function ProductDetails() {
  const { id } = useParams();

  const url = `http://127.0.0.1:3001/products/${id}`;

  const { data: item, loading, error } = useFetch(url);

  if (loading) {
    return <div>{loading}</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Navbar />
      <section className="product-detail-section">
        <div className="product-details-container">
          <img src={item.image} alt="" />
          <div className="prod-details">
            <h2>{item.name}</h2>
            <h4>${item.price}</h4>
            <p>{item.description}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </section>
    </>
  );
}
