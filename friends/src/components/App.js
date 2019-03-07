import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Friends from './Friends';
import FriendForm from './FriendForm';
import Spinner from './Spinner';
import Login from './Login';


export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to='/friends'>Friends</Link>
          <Link to='/'>Login</Link>
        </nav>

        <Route
          path='/friends'
          render={() => (
            localStorage.getItem('token')
              ? (
                <Spinner>
                  <Friends />
                  <FriendForm />
                </Spinner>
              )
              : (
                <Redirect to='/' />
              )
          )}
        />

        <Route
          exact
          path='/'
          render={() => (
            <Login />
          )}
        />
      </div>
    </Router>
  );
}
