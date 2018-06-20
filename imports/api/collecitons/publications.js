import Book from '/imports/api/collecitons/books'
import Author from '/imports/api/collecitons/authors'

Meteor.publish('books.all', function() {
  debugger
  return [Book.find(), Author.find()]
})

Meteor.publish('authors.all', function() {
  return Author.find({}, {
	  fields: { _isNew: 0 }
  })
})