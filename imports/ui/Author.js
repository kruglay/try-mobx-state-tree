import React, {Component} from 'react'

class Author extends Component {
	render() {
		const {author} = this.props
		return (
			<li key={author._id}>
				{author.name} {author.age}
				{/*<button onClick={}>remove</button>*/}
			</li>
		)
	}
}

export default Author
