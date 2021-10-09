import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import PageHomepage from './Home/Homepage';
import PageBio from './Bio/Biografia';
import PageNotFound from './404/NotFound';
import i18next from '../i18n';

function Root() {
  return (
    <>
    <Router>
      <Switch>
        <Route path="/" exact component={PageHomepage} />
        <Route path="/bio" component={PageBio} />
        <Route path="/404" component={PageNotFound} />
        <Route path="*"><Redirect to='/404'/></Route>
      </Switch>
    </Router>
    </>
  );
}

export default Root;