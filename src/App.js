import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

import Chap11 from './chap11'
import Chap12 from './chap12'
import Chap13 from './chap13'

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-static-top">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">React 勉強会</a>
            </div>
            <ul className="nav navbar-nav">
              <li><Link to='11'>Composability</Link></li>
              <li><Link to='12'>Simple todo</Link></li>
              <li><Link to='13'>Todo</Link></li>
            </ul>
          </div>
        </nav>
        <div className='container'>
          <div className="row">
            { this.props.children }
          </div>
        </div>
      </div>
    )
  }
}

class None extends Component {
  render() {
    console.log('no match')
    return <h1>React 勉強会</h1>
  }
}

export default class extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={None} />
          <Route path="11" component={Chap11}/>
          <Route path="12" component={Chap12}/>
          <Route path="13" component={Chap13}/>
          <Route path="*" component={None}/>
        </Route>
      </Router>
    )
  }
}
