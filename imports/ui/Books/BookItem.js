import React, {Component} from 'react'
import BookItem from './pure'

class BookItemSmart extends Component {
	render() {
		return (
			<BookItem {...this.props}/>
		)
	}
}

export default BookItemSmart