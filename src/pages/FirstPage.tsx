import React from 'react'
import { Link } from 'react-router-dom';
import { dev4 } from '../Classes/Worker';
import {Tool} from "../Classes/Tool";
import { CardComponent } from '../components/CardComponent';


const FirstPage = () => {

    
 let miTexto = dev4.Working();
 
 let div1 = new Tool("", miTexto);
 
 let miDiv = div1.Div();

  return (
    <>
      <p>
        <Link to="/second">Go to Second Page</Link>
      </p>
      {miDiv}
      <CardComponent />
    </>
  );
}

export default FirstPage