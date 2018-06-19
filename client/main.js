import ReactDOM from 'react-dom'
import React from 'react'


import './main.html';
import Author from '/imports/api/collecitons/authors'
import Book from '/imports/api/collecitons/books'

import App from '/imports/ui/App'

window.Book = Book
window.Author = Author

Meteor.startup(function() {
  ReactDOM.render(<App/>, document.getElementById('root'))
})

