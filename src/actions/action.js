import axios from 'axios';

// Action
function listItemClick(index) {
  return {
    type: 'LIST_ITEM_CLICK',
    index
  };
}

// Action
function deleteListItem(index) {
  return {
    type: 'DELETE_LIST_ITEM',
    index
  };
}

// Action
function inputSubmit() {
  return {
    type: 'INPUT_SUBMIT'
  };
}

// Action
function inputChange(value) {
  return {
    type: 'INPUT_CHANGED',
    value
  };
}

// action
function increment(value) {
  return {
    type: 'INCREMENT',
    value
  };
}

// action
function decrement(value) {
  return {
    type: 'DECREMENT',
    value
  };
}

function setList(data) {
  return {
    type: 'SET_LIST',
    data
  };
}

export function addTask(item) {
  return dispatch => {
    return dispatch(addTaskSuccess(item));
  }
}

export const addTaskSuccess = item => {
  return {
    type: 'TASK_ADD',
    payload: item
  }
}

export const delTask = id => {
  return {
    type: 'TASK_DELETE',
    payload: {
      id
    }
  }
};

export const delTaskSuccess = id => {
  return dispatch => {
    return dispatch(delTask(id));
  }
}

export const getTasks = tasks => {
  return {
    type: 'TASK_GET_ALL',
    tasks
  };
};

export const getAllTask = () => {
  return dispatch => {
    let todoUrl = `/api/todo/`;
    let token = localStorage.getItem('token');

    axios.defaults.headers.common = {
      Authorization: `bearer ${token}`
    };

    return axios
      .get(todoUrl)
      .then(response => {
        dispatch(getTasks(response.data.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export { listItemClick, deleteListItem, inputSubmit, inputChange, increment, decrement, setList };
