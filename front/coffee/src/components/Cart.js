import Navbar from "./Navbar";
import useFetch from "./useFetch";
import { useCartItems } from "./cartContext";

export default function Cart() {
  const { cartItemsIds, toggleCartItems, clearCart } = useCartItems();
  const url = "http://127.0.0.1:3001/";
  const { data: product, loading, error } = useFetch(url);

  const handleToggleCartItems = (itemId) => {
    toggleCartItems(itemId);
  };

  let cartProducts = product
    ? product.filter((item) => cartItemsIds.includes(item._id))
    : [];

  let total = 0;

  cartProducts.forEach((element) => {
    total += parseFloat(element.price);
  });

  if (loading) {
    return <div>{loading}</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Navbar />
      <section class="shopping-cart-container">
        <div class="cart-title">
          <h2>Shopping cart</h2>
          <p class="remove-all" onClick={() => clearCart()}>
            Remove all
          </p>
        </div>
        {cartProducts.length === 0 ? (
          <div>Please add items to the cart :D</div>
        ) : (
          <>
            {cartProducts.map((product) => (
              <div class="cart-items-container">
                <img src={product.image} alt="" />
                <div class="item-description">
                  <h3>{product.name}</h3>
                  <p>356g</p>
                </div>
                <div class="quantity">
                  <button>+</button>
                  <h3>2</h3>
                  <button>-</button>
                </div>
                <div class="cart-item-price">
                  <h3>${product.price}</h3>
                  <p onClick={() => handleToggleCartItems(product._id)}>
                    Remove
                  </p>
                </div>
              </div>
            ))}

            <div class="total-line"></div>
            <div class="total-container">
              <div class="empty"></div>
              <div class="line-contraint">
                <div class="total-price">
                  <div class="total">
                    <div class="sup-total">
                      <h4>Sub-Total</h4>
                      <p>{cartProducts.length} items</p>
                    </div>
                    <h2>${total}</h2>
                  </div>
                  <button>Check-out</button>
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
}
