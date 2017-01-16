import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Home} />
          <Route path='/contact-us' component={ContactPage}>
            <IndexRoute component={ContactDetailsLondon} />
            <Route path='/contact-us/contact-london' component={ContactDetailsLondon} />
            <Route path='/contact-us/contact-kiev' component={ContactDetailsKiev} />
          </Route>
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}

const Container = (props) => (
  <div>
    <Nav />
    {props.children}
  </div>
)

const ContactPage = (props) => (
  <div>
    <ContactSubNav />
    {props.children}
  </div>
)

const Nav = () => (
  <div>
    <Link to='/'>Home</Link>&nbsp;
    <Link to='/contact-us'>Contact Us</Link>
  </div>
)

const ContactSubNav = () => (
  <div>
    <Link to='/contact-us/contact-london'>London Office</Link>
    <Link to='/contact-us/contact-kiev'>Kiev Office</Link>
  </div>
)

const Home = () => <h1>Hello from Home!</h1>
const ContactDetailsLondon = () => <h1>Office London: Find us @ 123 Paddington</h1>
const ContactDetailsKiev = () => <h1>Office Kiev: Find us @ 1234 Kiev</h1>
const NotFound = () => (
  <h1>404... This page is not found!</h1>
)

export default App
