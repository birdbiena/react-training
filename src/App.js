import React from 'react';
import { Provider } from 'react-redux';
import ToDoAppContainer from './containers/toDoAppContainer';
import configureStore from './redux/configureStore';

const store = configureStore();

class App extends React.Component {
    render(){
      return(
        <Provider store={store}>
          <ToDoAppContainer />
        </Provider>
      );
    }
  }

export default App;
