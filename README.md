
## My Reads Project

This project was developed for the React Nanodegree Program. It is the first project of the react nanodegree and it's required to use react , react router , etc.

## Installing the app
Two steps: 

-> First: Install all the dependencies with: npm install
-> Second: Start the server with npm start

## Inside the project
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains Bookshelves and Search component.
      └── SearchComponents
        ├── Search.js # Component where the user can search for books and set their shelves.
      └── BookComponents
      ├── BookList.js # Component that lists all the book shelves.
      ├── Book.js # Component used for books informations.
      └── ShelfComponents
      ├── Shelf.js # Component that is used to wrap the books.
    └── Utils 
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.