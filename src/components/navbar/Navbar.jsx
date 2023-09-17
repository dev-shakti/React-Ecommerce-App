import "./Navbar.scss"
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useCartContext } from "../../context/cartContext";
import { useState } from "react";

const Navbar = () => {

  const [menuOpen,setMenuOpen] = useState(false);
  const { total_items } = useCartContext();

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <span>Digistore</span>
        </div>

        <div className="center">
          <div onClick={() => setMenuOpen(true)}>
           <MenuIcon className="menu-icon"/>   
          </div>
        </div>

        <div className="right">
          <div className="item">
            <Link to="/" className="links">Homepage</Link>
          </div>

          <div className="item">
            <Link to="/products/:id" className="links">Product</Link>
          </div>
          <div className="item">
            <a href="#contact" className="links">Contact</a>
          </div>

          <div className="item">
            <div className="icons">
              <ShoppingCartOutlinedIcon />
              <span className="cart-total-quantity">{total_items}</span>
            </div>

          </div>
        </div>
        <div className="mobile-menu-bar" style={{ transform: menuOpen ? 'translateX(0%)' : 'translateX(-100%)' }}>
          <div className="closeIcon" onClick={() => setMenuOpen(false)}>
          <CloseIcon className="menu-icon"/>
          </div> 
          <ul>       
            <li onClick={() => setMenuOpen(false)}><Link to="/" className="links">Home</Link> </li>
            <li onClick={() => setMenuOpen(false)}><Link to="/products/:id" className="links"> Product</Link> </li>
            <li onClick={() => setMenuOpen(false)}><a href="#contact" className="links">Contact</a> </li>
          </ul>  
        </div>
      </div>
    </div>
  )
}

export default Navbar
