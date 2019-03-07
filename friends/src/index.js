import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
// import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import { friendsReducer, spinner } from './state/reducers';

const rootReducer = combineReducers({
    friendsReducer,
    spinner
});


const store = createStore(
    rootReducer,
    {},
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
// registerServiceWorker();