import React, { Component } from 'react';
import Profile from '../../assets/images/profile.svg';
import { homeData } from './home-mock';
import withStyles from '@material-ui/core/styles/withStyles';
import Spinner from '../common/Spinner/Spinner';

const styles = {
  icon: {
    opacity: 0.3
  },
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personInfo: null,
      loading: true,
    }
  }

  componentDidMount() {
    this.setState({
      personInfo: homeData,
      loading: true
    })
  }

  render() {
    const {personInfo, loading} = this.state;
    if (loading) {
      return (
          <Spinner loading={loading}/>
      )
    }
    return (
        <div className="home-container">
          <div>
            <div>
              <img src={Profile} alt="Profile" width="200px"/>
            </div>
            <div className="contact-name">{personInfo.fullName}</div>
            <div className="contact-name">{personInfo.position}</div>
          </div>
          <div>
            <h3>Manager</h3>
            <div>
              {personInfo.manager.firstname} {personInfo.manager.lastname}
            </div>
          </div>
          <div>
            <h3>HR Manager</h3>
            <div>
              {personInfo.hrManager.firstname} {personInfo.hrManager.lastname}
            </div>
          </div>
          <div>
            <h3>Department</h3>
            <div>
              {personInfo.department}
            </div>
          </div>


        </div>
    )
  }
}

export default withStyles(styles)(Home);