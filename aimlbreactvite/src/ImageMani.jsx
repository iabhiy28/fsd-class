import React, { useState } from 'react'
import './image.css'
import carr from './carr.jpg'

function ImageMani() {
    const [img , setimg] = useState(true)



  return (
    <div className='imageCard'>
    <div className='catDiv'>
        <img src={carr} height={100} width={100}/>
    </div>
    <div>
        <button >Enhance Height</button>
        <button>Enhance Width</button>
        <button>Rotate</button>
        <button>Change BackGround</button>
    </div>
    </div>
  )
}

export default ImageMani