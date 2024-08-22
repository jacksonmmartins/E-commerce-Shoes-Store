import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Desconto from './Img/desconto.png'

const BookCard = ({ book }) => {

  return (
    <div className='card-container text-center'>
      <Card>
        <br />
        <Link to={`/show-book/${book._id}`} class='disable_links'>
          <img
            src={Desconto}
            alt='Books'
            height={200}
            width={200}
          />
          <div className='desc'>
            <br />
            <div class='card-header text-dark'>
            <h2>
              {book.title}
            </h2>
            </div>
            <h3>{book.author}</h3>
            <p>{book.description}</p>
          </div>
        </Link>
        <br />
        <br />
        <br />
        <br />
      </Card>
    </div>
  );
};

export default BookCard;