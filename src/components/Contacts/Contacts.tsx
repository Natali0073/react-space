import React, {Component} from 'react';
import { Redirect, Route, Router, Switch } from 'react-router';
import ContactsList from './ContactsList';
import ContactProfile from './ContactProfile';

class Contacts extends Component {
  render() {
    const loggedIn = localStorage.getItem('login') === 'true';
    const redirectTo = (url: string) => {
      return <Redirect to={url}/>;
    };
    return (
        <div className="contacts">
          <Router>
            <Switch>
              <Route exact path="/contacts" render={() => (
                      loggedIn ? <ContactsList/> : redirectTo('/login')
              )}/>
              <Route exact path="/contacts/:id" render={(props) => (
                      loggedIn ? <ContactProfile {...props}/> : redirectTo('/login')
              )}/>
            </Switch>
          </Router>
        </div>
    )
  }
}

export default Contacts;