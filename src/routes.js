import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing'
import Projects from './pages/Projects'
import Services from './pages/Services'
import History from './pages/History'
import Contact from './pages/Contact'
import NoMatch from './pages/NoMatch'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/projects" exact component={Projects} />
                <Route path="/services" exact component={Services} />
                <Route path="/history" exact component={History} />
                <Route path="/contact" exact component={Contact} />
                <Route component={NoMatch} />
            </Switch>
        </Router>
    )
}

export default Routes