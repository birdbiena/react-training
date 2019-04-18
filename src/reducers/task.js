// import { VisibilityFilters } from './../../containers/action';

function tasks(state = [], action) {
  switch (action.type) {
    case 'TASK_GET_ALL':
      return action.tasks;

    case 'TASK_ADD':
      let obj = {
        create_time: '2019-04-02T21:13:31.000Z',
        description: '2.今天是真的测的不太对劲啊',
        id: '1543614a55cf11e9b4337e1a06cf0192',
        status: 0,
        update_time: '2019-04-02T21:19:00.000Z',
        user_login_id: '099C18124ED811E9B4337E1A06CF0192'
      };

      return [...state, obj];

    case 'TASK_DELETE':
      // 先取原始数组中取从0开始 第action.index个,再截取从action.index + 1开始到末尾。
      // return [...state.slice(0, action.index), ...state.slice(action.index + 1)];
      return state.filter(item => item.id !== action.payload.id);

    default:
      return state;
  }
}

export default function taskReducer(state = [], action) {
  return tasks(state, action);
}
