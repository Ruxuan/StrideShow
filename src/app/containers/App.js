import React from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as projectActions from '../actions/projectActions';
import * as socketActions from '../actions/socketActions';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <h1>
          <Link to="/demo">StrideShow Dashboard</Link>
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
    socketActions: bindActionCreators(socketActions, dispatch)
  }
};

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default App;
