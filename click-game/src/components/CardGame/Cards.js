import React from 'react';
// import { CardGame } from './CardGame.js';
import Peanuts1 from '../../images/peanuts1.png';
import Peanuts2 from '../../images/peanuts2.png';
import Peanuts3 from '../../images/peanuts3.png';
import Peanuts4 from '../../images/peanuts4.png';
import Peanuts5 from '../../images/peanuts5.png';
import Peanuts6 from '../../images/peanuts6.png';
import Peanuts7 from '../../images/peanuts7.png';
import Peanuts8 from '../../images/peanuts8.png';
import Peanuts9 from '../../images/peanuts9.png';
import Peanuts10 from '../../images/peanuts10.png';
import Peanuts11 from '../../images/peanuts11.png';
import Peanuts12 from '../../images/peanuts12.png';

const cards = [
  Peanuts1,
  Peanuts2,
  Peanuts3,
  Peanuts4,
  Peanuts5,
  Peanuts6,
  Peanuts7,
  Peanuts8,
  Peanuts9,
  Peanuts10,
  Peanuts11,
  Peanuts12,

];

export const Cards = props => (

  <div className=' row justify-content-around'>
    { cards.map((img, i) => <Cards img={img} key={i} index={i} handleClick={props.handleClick}/>).sort (() => Math.random() < 0.5 ? 1 : -1)}

  </div>
);
