import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './Utils/BooksAPI';
import './App.css';
import BookList from './BookComponents/BookList';
import Search from './SearchComponents/Search';

class BooksApp extends React.Component {

    state = {
      books: [],
    };

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({books: books});
    });
  };

  fetchBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({books: books})
    })
  }

  updateBooks = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.fetchBooks();
    })
  }

  render() {
    const shelves = [
      {id: 'currentlyReading', title: 'Currently Reading'},
      {id: 'wantToRead', title: 'Want to Read'},
      {id: 'read', title: 'Read'}
    ];

    const{books} = this.state;

    return (
      <div className="app">
        <Route path="/" exact render={() => (
            <BookList 
              all_shelfs={shelves}
              books={books}
              onChangeShelf={ this.updateBooks }
            />
        )}/>
        <Route path="/search" render={() => (
          <Search
            onChangeShelf={ this.updateBooks }
            shelfBooks={books}
          />
        )}
        />
      </div>
    )
  }
}

export default BooksApp