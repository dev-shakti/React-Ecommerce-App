import CartItem from "../cartItem/CartItem";
import "./Cart.scss"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import FormatPrice from "../../Helpers/FormatPrice";
import { useContext } from "react";
import { useCartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

const Cart = () => {

  const { 
    cart, 
    clearCart,
    shipping_fee, 
    total_price 
  } = useCartContext()

  if (cart.length === 0) {
    return <div className="empty-cart"
      style={{
        textAlign: "center",
        padding: "50px 0px",
        color: "gray",
        fontSize: "25px"
      }}>
      Cart is empty !
    </div>
  }

  return (
    <div className='cart'>
      <div className="container">
        <div className="cart-header">
          <p>Item</p>
          <p>Price</p>
          <p>quantity</p>
          <p>Subtotal</p>
          <p>Remove</p>
        </div>
        <hr />
        <div className="cart-item">

          {
            cart.map((item) => {
              return <CartItem key={item.id} {...item} />
            })
          }

        </div>
        <hr />
        <div className="cart-buttons">
          <Link to="/products/:id" className="links">
            <button className="cart-btn shopping-btn">
              Continue shopping
            </button>
          </Link>
          <button
            className="cart-btn clear-btn"
            onClick={clearCart}>
            Clear Cart
          </button>
        </div>
        <div className="bottom">
          <div className="more-info">
            <div className="item-info">
              <span className="subtotal">Subtotal:</span>
              <span><FormatPrice price={total_price} /></span>
            </div>
            <div className="item-info">
              <span className="shipping">Shipping fee:</span>
              <span><FormatPrice price={shipping_fee} /></span>
            </div>
            <hr />
            <div className="item-info">
              <span className="order">Order total:</span>
              <span><FormatPrice price={total_price + shipping_fee} /></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
