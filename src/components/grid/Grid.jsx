import "./Grid.scss"
import Card from "../card/Card"
import { useFilterContext } from "../../context/FilterContext"

  
const Grid = () => {
  const {filter_products}=useFilterContext();
  
    return (
      <div className='grid'>
         {
           filter_products.map((item) => <Card item={item} key={item.id}/>)
          }
      </div>
    )

 
}

export default Grid
