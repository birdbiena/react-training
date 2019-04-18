import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import TaskList from './../pages/Tasks/TaskList';
import { getAllTask, delTask } from './../actions/action';

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getAllTask, delTask }, dispatch);
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  return Object.assign({}, ownProps, stateProps, dispatchProps);
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
  )(TaskList)
);
