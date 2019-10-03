import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home'
import Sidebar from './components/sidebar/Sidebar'
import Lesson1 from './components/lessons/lesson1/Lesson1'

function SamuraiRouter() {
    return (
        <Router>
            <Switch>
            <div>
                test
                <Route path="/" exact component={Home}/>
                <Route path="/sidebar" component={Sidebar}/>
                <Route path="/lesson1" component={Lesson1}/>
            </div>
            </Switch>
        </Router>
    );
}

export default SamuraiRouter;