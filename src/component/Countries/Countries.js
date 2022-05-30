import React, { useEffect, useState } from 'react';
import Country from './Country';
import './designcountry.css';

const Countries = () => {
    const [Restcountries, setRestcountries] = useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=> res.json())
        .then(data=> setRestcountries(data));
    },[])
    return (
        <div>
            <h2>Total Country: {Restcountries.length}</h2>
        <div className='countries-contrainer'>
           {Restcountries.map((country, index)=><Country key={index} country={country} />)} 
        </div>
        </div>
    );
};

export default Countries;