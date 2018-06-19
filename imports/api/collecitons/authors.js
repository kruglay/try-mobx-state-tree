import {Class} from 'meteor/jagi:astronomy'

collection = new Mongo.Collection('authors')

const Author  = Class.create({
  name: 'Author',
  collection,
  fields: {
    name: String,
    age: Number,

  },
  indexes: {
    name: {
      fields: {
        name: 1,
      },
      options: {
        unique: true
      }
    }
  },
  meteorMethods: {
    add(params) {
      const author = new Author(params, {cast: true})
      return author.save()
    }
  }
})

export default Author