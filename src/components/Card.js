import React from 'react'

function Card(props) {
    const {id,title,img}=props
  return (
        
<div id={id} className="card" >
    <h3>{title}</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, quisquam?</p>
    <img src={img} alt="pic" />
</div>
    
  )
}

export default Card