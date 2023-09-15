import "./CartItem.scss"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import FormatPrice from "../../Helpers/FormatPrice";
import { useCartContext } from "../../context/cartContext";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CartItem = ({id,name,price,max,color,quantity,image,quntity,setQuantity}) => {
  
    const {removeItem,increment,decrement}=useCartContext();
    
  return (
    <div className="cart-items">
      <div className="item-info">
        <img src={image} alt={name}/>
        <div className="right">
            <span>{name}</span>
            <div className="item-color"> 
                <span>color</span>
                <div style={{backgroundColor:color}} className="color-div"></div>
            </div>
        </div>
      </div>
      {/* price */}
      <div >
        <p><FormatPrice price={price}/></p>
      </div>
      {/* quantity */}
      <div className="item-quantity">
        <button className="quant-btn" onClick={() => decrement(id)} >
          <RemoveIcon className="qunatity-icon"/>
        </button>
        {quantity}
        <button className="quant-btn"  onClick={() => increment(id)}>
          <AddIcon className="qunatity-icon"/>
        </button>
      </div>
       {/* subtotal */}
       <div >
        <p><FormatPrice price={price*quantity}/></p>
      </div>
      <div onClick={() => removeItem(id)}>
        <DeleteOutlinedIcon className="delete-icon" />
      </div>
      
    </div>
  )
}

export default CartItem
