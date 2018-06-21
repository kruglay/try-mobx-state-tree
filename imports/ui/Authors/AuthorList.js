import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'

import Book from '/imports/api/collecitons/books'
import Author from './Author'


class AuthorListSmart extends Component {
	componentDidMount() {
		this.props.authors.subscribe()
	}

	componentWillUnmount() {
		this.props.authors.unsubscribe()
	}

	// handleClick(e) {
	// 	e.preventDefault()
	// 	this.props.author
	// }

	render() {
		const {authors} = this.props
		return (
			<div>
				<ul>
					{
						authors.list.map(author => {
								return (
									<Author key={author._id} author={author}/>
								)
							}
						)
					}
				</ul>
			</div>

		)
	}
}

export default inject('authors')(observer(AuthorListSmart))