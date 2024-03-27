import React, { useEffect, useState } from 'react';
import { json } from 'react-router-dom';
import CardBook from './components/CardBook';

const AllBooks = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch("bookData.json")
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div className='mt-7 mr-7 ml-7'>
           <div className='text-4xl text-center '> BOOKS {books.length}</div>
          <div className='mt-5 ml-20 mb-7 grid gap-4 grid-cols-1 lg:grid-cols-3'>
          {
             books.map(book=><CardBook key={book.id} book={book}></CardBook> )
           }
          </div>
        </div>
    );
};

export default AllBooks;