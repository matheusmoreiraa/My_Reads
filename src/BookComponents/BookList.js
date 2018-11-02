import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Shelf from '../ShelfComponents/Shelf';
import NavBar from '../NavBar'



const BookList = (props) => {
    
    const { all_shelfs, books, onChangeShelf } = props;

    return (
        <div className="list-books">
           <NavBar/>
            <div className="list-books-content">
                    {all_shelfs.map((shelf) => (
                        <div key={shelf.id}>
                            <Shelf 
                                shelf={shelf}
                                books={books.filter( (book) => book.shelf === shelf.id )}
                                onChangeShelf={onChangeShelf}
                            />
                        </div>
                    ))}
            </div>
            <div className="open-search">
                <Link to="/search">
                    Add a book
                </Link>
            </div>
        </div>
    )
 
}

BookList.propTypes = {
    all_shelfs: PropTypes.array.isRequired,
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
}

export default BookList