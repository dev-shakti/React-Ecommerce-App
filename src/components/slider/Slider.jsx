import "./Slider.scss"
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import { useState } from "react";

const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
];

const Slider = () => {
    const [currentSlide,setCurrentSlide]=useState(0);

    const handleClick = (direction) => {
        if(direction==="left"){
           currentSlide > 0 ? setCurrentSlide(currentSlide-1) : setCurrentSlide(2)
        }
        if(direction==="right"){
            currentSlide < 2 ? setCurrentSlide(currentSlide+1) : setCurrentSlide(0)
         }
    }

    return (
        <div className="slider">
            <div className="container" style={{transform:`translateX(-${currentSlide*100}vw)`}}>
                <img src={data[0]} alt="" />
                <img src={data[1]} alt="" />
                <img src={data[2]} alt="" />
            </div>
            <div className="icons">
                <div className="icon" onClick={() => handleClick("left")}>
                    <WestOutlinedIcon />
                </div>
                <div className="icon" onClick={() => handleClick("right")}>
                    <EastOutlinedIcon />
                </div>
            </div>

        </div>
    )
}

export default Slider
