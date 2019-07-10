import React, {Component} from 'react';
import Header from '../Header/Header';
import Routes from '../Routes/Routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { withRouter } from 'react-router';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Header />
          <Routes />
          <ToastContainer />
        </div>
    );
  }
}

export default withRouter(App);
