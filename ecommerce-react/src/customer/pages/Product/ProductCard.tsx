import React, { useEffect, useState } from 'react'
import './ProductCard.css'
import { Button } from '@mui/material'
import { Favorite, ModeComment } from '@mui/icons-material'
import { teal } from '@mui/material/colors'
import { Product } from '../../../types/ProductTypes'
// const images=[
//     "https://images.pexels.com/photos/4715341/pexels-photo-4715341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     "https://images.pexels.com/photos/3992188/pexels-photo-3992188.jpeg?auto=compress&cs=tinysrgb&w=1200",
// ]
const ProductCard = ({item}:{item:Product}) => {
  const [currentImage, setCurrentImage] = useState(0)
  const [isHovered, setIsHovered] = useState(false);

  useEffect(()=>{

    let interval: any
    if(isHovered){
      interval=setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % item.images.length);
      }, 1000);
    }
    else if(interval){
      clearInterval(interval);
      interval=null;
    }
    return () => clearInterval(interval);

  },[isHovered])
  
  return (
    <div className='group px-4 relative'>
        <div className='card'
        onMouseEnter={()=>setIsHovered(true)}
        onMouseLeave={()=>setIsHovered(false)}
        >
            {item.images.map((item,index) => <img
            key={index}
            className='card-media object-top'
            src={item} alt=""
            style={{transform: `translateX(${(index-currentImage)* 100}%)`}}
            />)}
            console.log(item.images);


           {isHovered && <div className='indicator flex flex-col items-center space-y-2'>
<div className='flex gap-3'>
  <Button variant='contained' color='secondary'>
    <Favorite sx={{color:teal[500]}}/>
  </Button>

  <Button variant='contained' color='secondary'>
    <ModeComment sx={{color:teal[500]}}/>
  </Button>
</div>

           </div> } 

        </div>
        <div className='details pt-3 space-y-1 group-hover-effect rounded-mad'>
<div className='name'>
  <h1>Niky</h1>
<p>Children Socks</p>

</div>
<div className='price flex items-center gap-3' >
<span className='font-sans text-gray-800'>
  € 4.0
</span>
<span className='thin-line-through text-gray-400'>
  € 9.9
</span>
<span className='text-primary-color font-semibold'>
  60%
</span>

</div>
        </div>

    </div>
  )
}

export default ProductCard