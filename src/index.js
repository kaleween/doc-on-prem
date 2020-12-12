import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NotFound from './components/NotFound';
import * as serviceWorker from './serviceWorker';
import {
    BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import LoginComponent from './components/Login/Login';
import rootReducer from './store/reducers/reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux'

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const Root = () => (
    <Router>
        <Switch>
            <Route exact path='/' component={App}/>
            <Route exact path='/login' component={LoginComponent}/>
            <Route component={NotFound}/>
        </Switch>
    </Router>
)

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Root/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
