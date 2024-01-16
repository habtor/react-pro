import Navbar from "./Navbar";

export default function CoffeeTypes() {
  return (
    <>
      <Navbar />

      <section class="types-section">
        <h1 class="types-title">4 Types of Coffee Beans</h1>
        <div class="types-container">
          <div class="line-container">
            <h4>
              High
              <br />
              Caffeine
            </h4>
            <div class="caffeine-line"></div>
            <h4>
              Low
              <br />
              Caffeine
            </h4>
          </div>
          <div>
            <div class="types-info-container">
              <div class="bean-image">
                <img
                  src="https://puritycoffee.com/cdn/shop/articles/purity_coffee_beans_dark_roast_1200x1200.jpg?v=1627687901"
                  alt=""
                />
              </div>
              <div class="bean-info">
                <h3>Robusta</h3>
                <ul>
                  <li>
                    <strong>
                      - Used for espresso drinks and instant coffee.
                    </strong>
                  </li>
                  <li>
                    <strong>- Strong, bitter flaver.</strong>
                  </li>
                  <li>
                    <strong>- Low price.</strong>
                  </li>
                </ul>
              </div>
            </div>
            <div class="types-info-container">
              <div class="bean-image">
                <img
                  src="https://andersonscoffee.com/wp-content/uploads/french.jpg"
                  alt=""
                />
              </div>
              <div class="bean-info">
                <h3>Arabica</h3>
                <ul>
                  <li>
                    <strong>- Most common type of coffee bean.</strong>
                  </li>
                  <li>
                    <strong>- Sweet, smooth flaver.</strong>
                  </li>
                  <li>
                    <strong>
                      - Requires careful pruning, leading to a higher price tag.
                    </strong>
                  </li>
                </ul>
              </div>
            </div>
            <div class="types-info-container">
              <div class="bean-image">
                <img
                  src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/7-coffee-beans-macro-libor-vrska.jpg"
                  alt=""
                />
              </div>
              <div class="bean-info">
                <h3>Librica</h3>
                <ul>
                  <li>
                    <strong>- Used for Kapeng Barako or instant coffee.</strong>
                  </li>
                  <li>
                    <strong>- Bold, smoky flaver.</strong>
                  </li>
                  <li>
                    <strong>
                      - Rare and mostly found in Indonesia or the Philippines.
                    </strong>
                  </li>
                </ul>
              </div>
            </div>
            <div class="types-info-container">
              <div class="bean-image">
                <img
                  src="https://media.istockphoto.com/id/1067696710/photo/roasted-coffee-beans-close-up-on-black-background.jpg?s=612x612&w=0&k=20&c=qJEoBcYIQOZrE6jOYrIIVShrGgWAzsZ3EdmQ2xklID8="
                  alt=""
                />
              </div>
              <div class="bean-info">
                <h3>Arabica</h3>
                <ul>
                  <li>
                    <strong> - Used for instant coffee.</strong>
                  </li>
                  <li>
                    <strong>- Tart, fruity flaver.</strong>
                  </li>
                  <li>
                    <strong>- Found in Southeast Asia.</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
