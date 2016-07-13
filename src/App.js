import React, { Component } from 'react';
import { Router, Route, Link, hashHistory } from 'react-router';

import Chap11 from './chap11'
import Chap12 from './chap12'
import Chap13 from './chap13'

class App extends Component {
  render() {
    return (
      <div>
        <h1>React 勉強会</h1>
        <Link to='11'>Composability</Link>
        <Link to='12'>Simple todo</Link>
        <Link to='13'>Todo</Link>
        { this.props.children }
      </div>
    )
  }
}

export default class extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route path="11" component={Chap11}/>
          <Route path="12" component={Chap12}/>
          <Route path="13" component={Chap13}/>
        </Route>
      </Router>
    )
  }
}
