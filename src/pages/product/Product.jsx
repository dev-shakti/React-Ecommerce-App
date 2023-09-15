import { useContext, useEffect, useState } from "react"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import "./Product.scss"
import { useParams } from "react-router-dom"
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import FormatPrice from "../../Helpers/FormatPrice";
import CartToggle from "../../components/addtocart/AddToCart";
import AddToCart from "../../components/addtocart/AddToCart";
import { ProductContext } from "../../context/ProductContext";
import StarRating from "../../components/starRating/StarRating";


const Product = () => {

  const { id } = useParams();
  
  const Api = "https://api.pujakaitem.com/api/products"

  const { 
    getSingleProduct, 
    isSingleLoading, 
    singleProduct 
  } = useContext(ProductContext);
 
  const { category,
    name,
    company,
    description,
    image = [{ url: "" }],
    price,
    stock,
    stars,
    reviews,
  } = singleProduct;

  const [mainImg, setMainImg] = useState(image[0])


  useEffect(() => {
    getSingleProduct(`${Api}?id=${id}`)
  }, [])


  if (isSingleLoading) {
    return <h2 style={
      {
        textAlign: "center",
        padding: "20px 0px",
        color: "#555"
      }}
    >Loading....</h2>
  }

  return (
    <div className="product">
      <div className="left">
        <div className="image">
          {
            image.map((item, index) =>
              <img
                src={item.url}
                key={index}
                alt={item.filename} onClick={() => setMainImg(item)} />)
          }
        </div>
        <div className="mainImage">
          <img src={mainImg.url} alt={mainImg.filename} />
        </div>
      </div>
      <div className="right">
        <h1>{name}</h1>
        <StarRating stars={stars} reviews={reviews}/>
        <p className="mrp">MRP: <span><FormatPrice price={price + 250000} /></span></p>
        <p className="deal">Deal of the day: <FormatPrice price={price} /></p>
        <p>{description}</p>

        <div className="warrenty">
          <div className="items">
            <DeliveryDiningIcon />
            <span>Free Delivery</span>
          </div>
          <div className="items">
            <PublishedWithChangesIcon />
            <span>30 Day replacement</span>
          </div>
          <div className="items">
            <DeliveryDiningIcon />
            <span>Delivered</span>
          </div>
        </div>
        
        <p>Available: <b>{stock > 0 ? "in stock" : "out of stock"}</b></p>
        <p>ID: <b>{id}</b></p>
        <p>Brand: <b>{company}</b></p>
        <hr />
        {
          stock > 0 &&  <AddToCart singleProduct={singleProduct} />
        }
       
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon /> ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>


      </div>
    </div>
  )
}

export default Product
