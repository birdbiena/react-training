// import initialState from './../../local_data';

const initialState = {
  list: [],
  headers: [],
  newToDo: '',
  number: 0
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INPUT_SUBMIT':
      return Object.assign({}, state, {
        list: [...state.list, { item: state.newToDo, done: false }],
        newToDo: ''
      });
    case 'INPUT_CHANGED':
      return Object.assign({}, state, {
        newToDo: action.value
      });
    case 'LIST_ITEM_CLICK':
      return Object.assign({}, state, {
        list: [...state.list.slice(0, action.index), Object.assign({}, state.list[action.index], { done: !state.list[action.index].done }), ...state.list.slice(action.index + 1)]
      });
    case 'DELETE_LIST_ITEM':
      return Object.assign({}, state, {
        list: [...state.list.slice(0, action.index), ...state.list.slice(action.index + 1)]
      });
    case 'SET_LIST':
      return Object.assign({}, state, {
        list: action.data.list,
        headers: action.data.headers,
        number: action.data.number
      });
    case 'INCREMENT':
      return Object.assign({}, state, {
        number: action.value + 1
      });
    case 'DECREMENT':
      return Object.assign({}, state, {
        number: action.value - 1
      });
    default:
      return state;
  }
}
