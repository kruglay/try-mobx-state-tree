import React, {Component} from 'react'
import {Provider} from 'mobx-react'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import {Switch, Route} from 'react-router'

import stores from '/imports/ui/models/stores'

import BookList from '/imports/ui/Books/BookList'
import AuthorList from '/imports/ui/Authors/AuthorList'
import BookCreate from '/imports/ui/Books/Book/BookCreate'

window.stores = stores

class App extends Component {
	render() {
		return (
			<Provider {...stores}>
				<Router>
					<div>
						<Link to="/books"> books </Link>
						<Link to="/authors"> authors </Link>
						<Switch>
							<Route exact path='/books' component={BookList}/>
							<Route exact path='/authors' component={AuthorList}/>
							<Route exact path='/books/create' component={BookCreate}/>
						</Switch>
					</div>

				</Router>
			</Provider>
		)
	}
}


export default App