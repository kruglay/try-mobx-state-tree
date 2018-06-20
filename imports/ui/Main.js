import React, {Component} from 'react'
import {Provider} from 'mobx-react'
import {BrowserRouter as Router} from 'react-router-dom'
import {Switch, Route} from 'react-router'

import stores from '/imports/ui/models/stores'

import App from './App'

class Main extends Component {
	render() {
		return (
			<Provider {...stores}>
				<Router>
						<Route path="/" component={App}/>
				</Router>
			</Provider>
		)
	}
}


export default Main