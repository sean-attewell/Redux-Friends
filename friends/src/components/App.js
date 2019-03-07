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
          <Link to='/'>Home</Link>
          <Link to='/friends'>Friends</Link>
          <Link to='/login'>Login</Link>
        </nav>

        <Route
          path='/friends'
          render={() => (
            localStorage.getItem('userToken')
              ? (
                <Spinner>
                  <Quotes />
                  <QuoteForm />
                </Spinner>
              )
              : (
                <Redirect to='/login' />
              )
          )}
        />

        <Route
          path='/login'
          render={() => (
            <Login />
          )}
        />
      </div>
    </Router>
  );
}
