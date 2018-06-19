import React, {Component} from 'react'
import {withTracker} from 'meteor/react-meteor-data'
import {Link} from 'react-router-dom'

import Book from '/imports/api/collecitons/books'
import Author from '/imports/api/collecitons/authors'

class BookListSmart extends Component {
  render() {
    const {books} = this.props
    return (
      <div>
        <Link to="/books/create">Create</Link>
        <ul>
          {books.map(el => {
            const author = Author.findOne(el._author)
            return (
              <li key={el._id}>
                {author.name} {el.title} {el.pages}
                <button onClick={this.handleClickCreate}>Edit</button>
              </li>
            )
          })}
        </ul>
      </div>

    )
  }
}

export default withTracker(props => {
  Meteor.subscribe('books.all')
  return {
    books: Book.find().fetch()
  }
})(BookListSmart)