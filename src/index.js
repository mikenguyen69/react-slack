import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import firebase from './firebase';
import 'semantic-ui-css/semantic.min.css';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTool} from 'redux-devtools-extension';

const store = createStore(() => {}, composeWithDevTool());

class Root extends Component {

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.props.history.push("/");
            }
        });
    }

    render() {
        return(
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </Switch>
        );
    }
}

const RootWithAuth = withRouter(Root);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <RootWithAuth />
        </Router>
    </Provider>
, document.getElementById('root'));
serviceWorker.register();
