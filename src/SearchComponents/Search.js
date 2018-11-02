
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as BooksAPI from '../Utils/BooksAPI';
import Book from '../BookComponents/Book';
import { DebounceInput } from 'react-debounce-input';

class Search extends Component {

       state = {
            books: [],
        };
 

    searchBooks = (query) => {
        const{shelfBooks} = this.props;

        if(query){
            BooksAPI.search(query,1000).then( (searchResp) => {
                if(searchResp.length>0){
                    const booksToShow = searchResp.map( (searchBook) => {
                        const found = shelfBooks.find( (shelfBook) => shelfBook.id === searchBook.id);
                        searchBook.shelf = found ? found.shelf : 'none';
                        return searchBook;
                    });
                    this.setState({books:booksToShow});
                }else{
                    this.setState({books:[]});        
                }
            });
        }else{
            this.setState({books:[]});
        }
    };

    render() {

        const {onChangeShelf} = this.props;
        const {books} = this.state;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link 
                        to="/"
                        className="close-search"
                    >Close></Link>
                    <div className="search-books-input-wrapper">
                       

                        <DebounceInput 
                            minLength = {2}
                            debounceTimeout = {300}
                            placeholder="Search for books..."           
                            onChange={(event) => this.searchBooks(event.target.value)}
                            />
                    </div>
                </div>
               

                <div className="search-books-results">
                    <ol className="books-grid">
                     
                        {books.length>0 && books.map((book)  => (
                            <li key={book.id}>
                                <Book
                                    book={book}
                                    onChangeShelf={onChangeShelf}
                                />
                            </li>
                        ))} 
                    </ol>
                </div>
            </div>
        )
    }

}

 Search.propTypes = {
  onChangeShelf: PropTypes.func.isRequired,
  shelfBooks: PropTypes.array.isRequired
};

export default Search