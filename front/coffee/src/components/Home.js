import { useState } from "react";
import useFetch from "./useFetch";
import addToCartImage from "../assets/cart-empty.png";
import addedToCartImage from "../assets/cart-ful.png";
import mainImage from "../assets/hero.jpg";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useCartItems } from "./cartContext";

export default function Categories() {
  const categories = ["Cookies", "Coffee", "All"];

  const { cartItemsIds, toggleCartItems } = useCartItems();

  const [selectedCategory, setSelectedCategory] = useState("");

  const url = "http://127.0.0.1:3001/";

  const { data: products, loading, error } = useFetch(url);

  const handleToggleCart = (itemId) => {
    toggleCartItems(itemId);
  };

  const cartItem = (itemId) => {
    return cartItemsIds.includes(itemId);
  };

  const handleClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : selectedCategory
      ? products.filter(
          (product) =>
            product.category.toLowerCase() === selectedCategory.toLowerCase()
        )
      : products;

  return (
    <div>
      <Navbar />
      <section className="mid-section">
        <div className="left-main">
          <h2>
            YOUR COFFEE
            <br />
            HEAVEN
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsam
            corrupti sunt quis illum voluptate assumenda ducimus suscipit
            obcaecati soluta, temporibus possimus voluptatibus mollitia a odio
            iusto? Tenetur, obcaecati ducimus!
          </p>
          <Link to={"/types"}>
            <button>Coffee Types</button>
          </Link>
        </div>
        <div className="right-main">
          <div className="coffee-cup-image">
            <img src={mainImage} alt="" />
          </div>
        </div>
      </section>

      <section className="categories-section">
        <div className="categories-container">
          <ul className="categories-links">
            {loading ? (
              <div>Loading...</div>
            ) : error ? (
              <div>Error...</div>
            ) : (
              categories.map((category) => (
                <li key={category} onClick={() => handleClick(category)}>
                  {category}
                </li>
              ))
            )}
          </ul>
        </div>
      </section>
      <section className="items-section">
        {filteredProducts ? (
          <div className="items-container">
            {filteredProducts.map((item) => (
              <div className="items" key={item._id}>
                <div className="item-image">
                  <img src={item.image} alt="" />
                </div>
                <div className="item-details-container">
                  <span>${item.price}</span>
                  <Link to={`/products/${item._id}`}>
                    <p className="item-title">{item.name}</p>
                  </Link>

                  <div className="item-details">
                    <img
                      src={
                        cartItem(item._id) ? addedToCartImage : addToCartImage
                      }
                      onClick={() => handleToggleCart(item._id)}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>{loading}</div>
        )}
      </section>
    </div>
  );
}
