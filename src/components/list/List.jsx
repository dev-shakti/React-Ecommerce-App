import FormatPrice from "../../Helpers/FormatPrice";
import { useFilterContext } from "../../context/FilterContext"
import "./List.scss"
import { NavLink, useParams } from "react-router-dom";

const List = () => {

  const {filter_products}=useFilterContext();
  const {id}=useParams()
  
  return (
    <div className="list">
      {
        filter_products.map((product) => {
          return <div className="ListItem" key={product.id}>
            <div className="left">
              <img src={product.image} alt={product.name}/>
            </div>
            <div className="right">
              <h3>{product.name}</h3>
              <FormatPrice price={product.price}/>
              <p>{product.description.slice(0,170)}...</p>
              <NavLink to={`/product/${product.id}`} className="links"><button className="read-more">Read more</button></NavLink>
            </div>
          </div>
        })
      }
    </div>
  )
}

export default List
