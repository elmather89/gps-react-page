import React from 'react';
import './style.css';
// import Button from 'react-bootstrap/Button';

function Card(props) {
  return (
    <div className='card'>
      <div className='card-body'>{props.children}</div>
    </div>
  );
}

export default Card;