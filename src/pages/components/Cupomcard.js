import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({book}) => {

  return (
    <div className='card-container'>
       <Link to={`/show-book/${book._id}`} class='disable_links'>
      <img
        src='https://img.freepik.com/fotos-gratis/frente-do-
        icone-de-porcentagem_187299-40103.jpg?t=st=1723604193~exp=1723607793~
        hmac=e47a4eabe5782b4f97921a2bcb9625fdbfc531448370c447153598a1c0911ccf&w
        =740'
        alt='Books'
        height={200}
      />
      <div className='desc'>
        <h2>
         {book.title}
        </h2>
        <h3>{book.author}</h3>
        <p>{book.description}</p>
      </div>
      </Link>
    </div>
  );
};

export default BookCard;