import { useState } from "react";
import "./AddToCart.scss"
import CheckIcon from '@mui/icons-material/Check';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useCartContext } from "../../context/cartContext";
import { NavLink } from "react-router-dom";

const AddToCart = ({ singleProduct }) => {

  const { addToCart } = useCartContext();

  const { id, colors = [], stock } = singleProduct;
  const [color, setColor] = useState(colors[0]);
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    quantity<stock ? setQuantity(quantity+1) : setQuantity(stock);
  }

  const handleDecrement = () => {
    quantity>1 ? setQuantity(quantity-1) : setQuantity(1);
  }

  return (
    <div className='addToCart'>

      <div className="colors"> Colors:
        {
          colors.map((currElem, index) => {
            return (
              <div className={color === currElem ? "color active" : "color"}
                style={{ backgroundColor: currElem }}
                key={index}
                onClick={() => setColor(currElem)}
              > {
                  color === currElem ? <CheckIcon className="icon" /> : null
                }
              </div>
            )
          })
        }
      </div>

      <div className="quantity">
        <button onClick={handleDecrement}
          className="quantity-btn">
          <RemoveIcon />
        </button>
        {quantity}
        <button
          onClick={handleIncrement}
          className="quantity-btn">
          <AddIcon />
        </button>
      </div>

      <NavLink to="/Cart" className="links">
        <button className="cart-btn"
          onClick={() => addToCart(id, color, singleProduct, quantity)}>
          <AddShoppingCartIcon /> ADD TO CART
        </button>
      </NavLink>

    </div>
  )
}

export default AddToCart
