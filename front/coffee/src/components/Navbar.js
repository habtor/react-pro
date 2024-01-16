import mycart from "../assets/mycart.png";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav class="navbar">
      <ul class="navbar-links">
        <Link to={"/"}>
          <li>Main Page</li>
        </Link>
        <li>Contact us</li>
        <li>Locations</li>
        <li>About us</li>
      </ul>
      <Link to={"/mycart/"}>
        <img class="logo" src={mycart} alt="" />
      </Link>
    </nav>
  );
}
