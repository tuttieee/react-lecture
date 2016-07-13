import React, { Component } from 'react';
import { Router, Route, Link, hashHistory } from 'react-router';

import Chap11 from './chap11'

class App extends Component {
  render() {
    return (
      <div>
        <h1>React</h1>
        <Link to='11'>Chapter11</Link>
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
        </Route>
      </Router>
    )
  }
}
