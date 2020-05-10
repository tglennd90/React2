import React from 'react';

import BookCard from './BookCard';

const BookList = (props) => {

    return (
        <div className="list">
            {
                props.books.map((book, i) => {
                    return <BookCard 
                               key={i}
                               title={book.volumeInfo.title}
                               author={book.volumeInfo.authors}
                               description={book.volumeInfo.subtitle}
                               image={book.volumeInfo.imageLinks.thumbnail}
                               link={book.volumeInfo.infoLink}
                               save={props.save}
                           />
                })
            }
        </div>
    )
}

export default BookList;