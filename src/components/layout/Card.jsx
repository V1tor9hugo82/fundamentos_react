import './Card.css';
import React from 'react';

export default function Card(props) {

  const cardStyle = {
    backgroundColor: props.color || '#1939B7',
    borderColor: props.color || '#BB317B',
  }

  return (
    <div className='Card' style={cardStyle}>
      <div className='Title'>{props.titulo}</div>
      <div className='Content'>
        {props.children}
      </div>
    </div>
  )
} 