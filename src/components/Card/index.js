import React from 'react';
// import Button from 'react-bootstrap/Button';

function Card(props) {
  return (
    <div className='card text-center'>
      <div className='card-body'>{props.children}</div>
    </div>
  );
}

export default Card;