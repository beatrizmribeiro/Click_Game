import React from 'react';

const initial = {
  begin: { text: "Click an image to begin! If you click twice the same imagem, you lose the game", type:'primary'},
  correct: {text: "Correct", type: 'success'},
  incorrect: {text: "You already clicked that image.", type:'danger'},
}

export const  Initial = props => (
  props.type && initial[props.type]?
    <div className={'alert alert-' + initial[props.type].type} role='alert'>
      {initial[props.type].text}
    </div> : {}
);
