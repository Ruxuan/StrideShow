import React from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/dashboardActions';

class Main extends React.Component {
  render() {
    return (
      <div>
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
  return bindActionCreators(actions, dispatch);
};

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

export default App;
