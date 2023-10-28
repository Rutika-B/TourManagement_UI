import React from 'react'
import "./service-card.css";
const ServiceCard = ({item}) => {

    const {imgUrl, title, desc}=item
  return (
    <div>
        <div>
            <img src="{imgUrl}" alt="" />
        </div>
    </div>
  )
}

export default ServiceCard