import React from 'react';
import './Color.scss';

export const Color = (props) => {
  return (
    <span className='color-div' style={{backgroundColor: `#${props.color}`}}>
    </span>
  )
}

export default Color;