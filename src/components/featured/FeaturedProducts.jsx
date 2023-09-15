import { useContext } from "react"
import Card from "../card/Card"
import "./FeaturedProducts.scss"
import { ProductContext } from "../../context/ProductContext"


const FeaturedProducts = ({ type }) => {

  const {
    featuredProducts,
    isLoading,
    products
  } = useContext(ProductContext)


  if (isLoading) {
    return <h2 style={{
      textAlign: "center",
      color: "#555",
      padding: "10px"
    }}>
      Loading....
    </h2>
  }
  
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} Products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className="bottom">
        {
          featuredProducts.map((item) => <Card item={item} key={item.id} />)
        }
      </div>
    </div>
  )
}

export default FeaturedProducts
