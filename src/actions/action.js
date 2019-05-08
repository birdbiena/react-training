import axios from 'axios';

const addTask = ({ description, status, user_login_id }) => {
  return dispatch => {
    let todoUrl = `/api/todo/`;
    let token = localStorage.getItem('token');

    axios.defaults.headers.common = {
      Authorization: `Bearer ${token}`
    };

    return axios
      .post(todoUrl, { description, status, user_login_id })
      .then(response => dispatch(addTaskSuccess(response.data.data)))
      .catch(error => {
        throw error;
      });
  };
};

const addTaskSuccess = item => {
  return {
    type: 'TASK_ADD',
    payload: item
  };
};

const delTask = id => {
  return dispatch => {
    let todoUrl = `/api/todo/${id}/`;
    let token = localStorage.getItem('token');

    axios.defaults.headers.common = {
      Authorization: `Bearer ${token}`
    };

    return axios
      .delete(todoUrl)
      .then(response => dispatch(delTaskSuccess(response.data.data)))
      .catch(error => {
        throw error;
      });
  };
};

const delTaskSuccess = id => {
  return {
    type: 'TASK_DELETE',
    payload: {
      id
    }
  };
};

const updateTask = item => {
  console.log('updateTask :', item);
  return dispatch => {
    let todoUrl = `/api/todo/${item.id}/`;
    let token = localStorage.getItem('token');

    axios.defaults.headers.common = {
      Authorization: `Bearer ${token}`
    };

    return axios
      .put(todoUrl, { description: item.description, status: item.status, id: item.id })
      .then(response => dispatch(updateTaskSuccess(item)))
      .catch(error => {
        throw error;
      });
  };
};

const updateTaskSuccess = item => {
  return {
    type: 'TASK_UPDATE',
    payload: item
  };
};

const getAllTask = () => {
  return dispatch => {
    let todoUrl = `/api/todo/`;
    let token = localStorage.getItem('token');

    axios.defaults.headers.common = {
      Authorization: `bearer ${token}`
    };

    return axios
      .get(todoUrl)
      .then(response => dispatch(getTasksSuccess(response.data.data)))
      .catch(error => {
        throw error;
      });
  };
};

const getTasksSuccess = tasks => {
  return {
    type: 'TASK_GET_ALL',
    tasks
  };
};

export { addTask, delTask, updateTask, getAllTask };
