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
                               description={book.volumeInfo.description}
                               image={book.volumeInfo.imageLinks.thumbnail}
                               link={book.selfLink}
                            //    save={props.getDbData}
                           />
                })
            }
        </div>
    )
}

export default BookList;