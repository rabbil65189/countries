import React from 'react';
import './designcountry.css'

const Country = (props) => {
   console.log(props);
    return (
      
        <div className='country'>
        <h2>Country Name:{props.country.name.common}</h2>  
        <img src={props.country.flags.png} alt=""/>
        <p>Capital: {props.country.capital}</p>
        </div>
    );
};

export default Country;