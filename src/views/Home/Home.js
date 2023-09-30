import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faLocationDot } from '@fortawesome/free-solid-svg-icons';
import {  faShop } from '@fortawesome/free-solid-svg-icons';

import Config from './../../utils/config.json';




function MyComponent() {
  return (
  <>
      <div className='container' style={{backgroundColor: Config.theme.accentColor}}>
        <h1 className='text-center display-1 ' style={{color: Config.theme.primaryColor}}>{Config.title} <FontAwesomeIcon icon={ faShop} style={{color: "#063689",}} /> </h1>
        <p className='text-center h2'>{Config.description} <FontAwesomeIcon icon={  faLocationDot} style={{color: "#e8bd11",}} /></p>

        <h2>Sweets</h2>
        {
            Config.services.map((serviceData, index)=>{
                const {title,img, description, price} = serviceData
                return(
                    <div className='card m-3' key={index}>
                    <div className='card-body'>

                    <h3 className='card-title h1' style={{color: Config.theme.secondaryColor}}>{title}</h3>
                    
                         <img  src={img} height={200} width={300} className='p-2 rounded-2'/>
                         <p className='description p-2'>{description}</p>
                    <p className='card-text'>Price: {price}</p>
                    </div>
                    </div>
                )
            })
        }
        
        </div>
 </>  
  );
}


export default MyComponent;