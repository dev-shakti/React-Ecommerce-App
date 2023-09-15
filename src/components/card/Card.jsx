
import FormatPrice from "../../Helpers/FormatPrice";
import "./Card.scss"
import { Link } from "react-router-dom"
const Card = ({ item }) => {

    const {id,name,category,price,image}=item;
   
  return (
    
    <Link className="links" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          <img src={image} alt={name} className="mainImg" />
      
        </div>
        <a>{category}</a>
        <div className="price">
          <h3>{name}</h3>
          <h3>
            <FormatPrice price={price}/>
          </h3>
        </div>
      </div>
    </Link>

  )
}

export default Card
