import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'
import { Provider } from 'react-redux'
import {store, history} from './store'
import { ConnectedRouter } from 'react-router-redux'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const About = () => (
  <div>
    {document.title = 'About'}
    <h2>About page</h2>
  </div>
)
const Home = () => (
  <div>
    {document.title = 'Home'}
    <h2>Home page</h2>
  </div>
)
// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
const RouteWithSubRoutes = (route) => (
  <Route exact={route.exact} path={route.path} render={props => (
    // pass the sub-routes down to keep nesting
    <App>
      <route.component {...props} routes={route.routes}/>
    </App>
  )}/>
)

const routes = [
  { path: '/',
    component: Home,
    exact:true
  },
  { path: '/about',
    component: About
  }
]

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        {/*routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))*/}
        <Route path='/' component={App}>
          <Route path='/home' component={Home} />
          <Route path='/about' component={About} />
        </Route>
        <ul>{console.log('this', this)}
          <li key='1'><Link to='/'>Home</Link></li>
          <li key='2'><Link to='/about'>About</Link></li>
        </ul>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
)