import React, {Component} from 'react'
// import {withTracker} from 'meteor/react-meteor-data'
import {Link} from 'react-router-dom'
import {observer, inject} from 'mobx-react'

// import Book from '/imports/api/collecitons/books'
// import Author from '/imports/api/collecitons/authors'

class BookListSmart extends Component {
	componentDidMount() {
		this.props.books.subscribe()
	}

	componentWillUnmount() {
		this.props.books.unsubscribe()
	}

	render() {
		const {books:{list}} = this.props
		return (
			<div>
				<Link to="/books/create">Create</Link>
				<ul>
					{list.map(book => {
						return (
							<li key={book._id}>
								{book._author.name} {book.title} {book.pages}
								<button onClick={(e) => e.preventDefault()}>Edit</button>
							</li>
						)
					})}
				</ul>
			</div>
		)
	}
}

// export default withTracker(props => {
//   Meteor.subscribe('books.all')
//   return {
//     books: Book.find().fetch()
//   }
// })(BookListSmart)

export default inject('books')(observer(BookListSmart))