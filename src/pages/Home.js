import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from '../pages/components/BookCard';


function Home(){
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
      ? 'there is no book record!'
      : books.map((book, k) => <BookCard book={book} key={k} />);

    return(
        <div className='list'>{bookList}</div>
    )
}

export default Home;