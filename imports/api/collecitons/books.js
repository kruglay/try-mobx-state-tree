import {Class} from 'meteor/jagi:astronomy'

collection = new Mongo.Collection('books')

const Book = Class.create({
  name: 'Book',
  collection,
  fields: {
    _author: String,
    title: String,
    pages: Number,
  },
  meteorMethods: {
    add(params) {
      const book = new Book(params, {cast: true})
      return book.save()
    }
  }
})

export default Book