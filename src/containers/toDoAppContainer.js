import { connect } from 'react-redux';
import ToDoApp from '../components/ToDoApp';
import { inputChange, inputSubmit, listItemClick, deleteListItem, increment, decrement, setList } from './action';

function mapStateToProps(state) {
    return {
        toDoApp: state.toDoApp
    }
}

function mapDispatchToProps(dispatch) {
    return {
        inputChange: value => dispatch(inputChange(value)),
        inputSubmit: () => dispatch(inputSubmit()),
        deleteListItem: i => dispatch(deleteListItem(i)),
        listItemClick: i => dispatch(listItemClick(i)),
        increment: value => dispatch(increment(value)),
        decrement: value => dispatch(decrement(value)),
        setList: data => dispatch(setList(data))
    };
}

function mergeProps(stateProps, dispatchProps, ownProps) {
    return Object.assign({}, ownProps, stateProps, dispatchProps);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(ToDoApp);
