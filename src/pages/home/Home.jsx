import FeaturedProducts from "../../components/featured/FeaturedProducts"
import Slider from "../../components/slider/Slider"
import Catagories from "../../components/catagories/Catagories"
import Contact from "../../components/contact/Contact"
import"./Home.scss"


const Home = () => {
  return (
    <div className="home">
     <Slider/>
     <FeaturedProducts type="Featured"/>
      <Catagories/>
     <FeaturedProducts type="Trending"/>
     <Contact/>
    </div>
  )
}

export default Home
