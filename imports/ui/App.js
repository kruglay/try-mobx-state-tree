import React, {Component} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {Switch, Route} from 'react-router'

import BookList from '/imports/ui/BookList'
import BookCreate from '/imports/ui/BookCreate'

class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route exact path='/books' component={BookList}/>
            <Route exact path='/books/create' component={BookCreate}/>
          </Switch>
      </Router>

    )
  }
}


export default App