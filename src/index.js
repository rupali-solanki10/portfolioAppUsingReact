import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route} from 'react-router-dom';
import App from './component/App';
import Jokes from './component/Jokes';
import {createBrowserHistory} from 'history';
import Header from './component/Header';
import './index.css'

ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route exact path="/" render={()=><Header><App /></Header>}/>
            <Route path = "/jokes" render={()=><Header><Jokes /></Header>}/>
        </Switch>
    </Router>
    , document.getElementById('root')
);