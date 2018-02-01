import React from 'react';
import './CardGame.css';

export const CardGame = props => (
  <div className='col-md-3' index={props.index} onClick={props.handleClick}>
    <img src={props.img} alt='' index={props.index}/>
  </div>
);
