import "./Navbar.scss"
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import { useCartContext } from "../../context/cartContext";

const Navbar = () => {

   const {total_items}=useCartContext();

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
        <div className="item">
            <img src="/img/en.png" alt="" />
            <KeyboardArrowDownIcon />
          </div>
           <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className="links" to="/products/1">Women</Link>
          </div>
          <div className="item">
            <Link className="links" to="/products/2">Men</Link>
          </div>
          <div className="item">
            <Link className="links" to="/products/3">Children</Link>
          </div>
        </div>
        <div className="center">
          DIGISTORE
        </div>
        <div className="right">
          <div className="item">
            <Link to="/" className="links">Homepage</Link>
          </div>
          
          <div className="item">
            <Link to="/products/:id" className="links">Product</Link>
          </div>
          <div className="item">
            <Link to="/" className="links">Contact</Link>
          </div>
          <div className="icons">
            <div className="cart-icon">
              <ShoppingCartOutlinedIcon />
              <span className="cart-total-items">{total_items}</span>
            </div>
          </div>

          <div className="item">
            <button className="login-btn">Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
