import React from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import networkActions from '../actions/networkActions/networkActions';
import * as impressActions from '../actions/impressActions';
import * as projectActions from '../actions/projectActions';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <h1>
          <Link to="/">StrideShow Dashboard</Link>
        </h1>
        { React.cloneElement(this.props.children, this.props) }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    projectActions: bindActionCreators(projectActions, dispatch),
    networkActions: {
      socketActions:   bindActionCreators(networkActions.socketActions, dispatch),
      mobileActions:   bindActionCreators(networkActions.mobileActions, dispatch),
      internetActions: bindActionCreators(networkActions.internetActions, dispatch)
    },
    impressActions: bindActionCreators(impressActions, dispatch)
  }
};

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default App;
