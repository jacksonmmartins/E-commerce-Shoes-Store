import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from './components/Cupomcard';

function CuponsHome() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get('https://mern-omega-ten.vercel.app/api/books')
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowBookList');
      });
  }, []);

  const bookList =
    books.length === 0
      ? ''
      : books.map((book, k) => <BookCard book={book} key={k} />);

  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center text-white'>Aproveite nossos cupons exclusivos</h2> 
          </div>
        </div>
        <div class='list_2'>{bookList}</div>
      </div>
    </div>
  );
}

export default CuponsHome;