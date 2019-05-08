function tasks(state = [], action) {
  switch (action.type) {
    case 'TASK_GET_ALL':
      return action.tasks;

    case 'TASK_ADD':
      return [...state, action.payload];

    case 'TASK_DELETE':
      return state.filter(item => item.id !== action.payload.id);

    case 'TASK_UPDATE':
      return state.map(item => item.id === action.payload.id ? action.payload: item);

    default:
      return state;
  }
}

export default function taskReducer(state = [], action) {
  return tasks(state, action);
}
