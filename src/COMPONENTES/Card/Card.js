import React from 'react';
import logo from '../../ASSETS/PERRITOPREOCUPAO.jpg';


function Card(props) {
    return ( <>
    
    <h1>
        {props.titulo}        
      </h1>
      <img src={logo}></img>
      <h2>{props.texto}</h2>
    
    </> );
}

export default Card;