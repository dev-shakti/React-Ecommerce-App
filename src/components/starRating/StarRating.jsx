import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';

const StarRating = ({stars,reviews}) => {
    
    const ratingStar=Array.from({length:5},(_,index) => {
        let numbers=index+0.5
        return (
            <span key={index}>
             
               {
                stars >=index+1  //4.8 0 1 2 3 4
                ? <StarIcon style={{color:"#f39c12"}}/> 
                : stars>=numbers 
                ? < StarHalfIcon style={{color:"#f39c12"}}/>
                :<StarBorderIcon style={{color:"#f39c12"}}/>
               }
            </span>
        )
    })
  return (
    <div style={{
        display:"flex", 
        alignItems:"center", 
        }}>
      {ratingStar}
      <p style={{paddingLeft:"10px"}}>({reviews} customer reviews)</p>
    </div>
  )
}

export default StarRating
