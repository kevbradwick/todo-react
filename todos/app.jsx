import React from 'react'
import ReactDOM from 'react-dom'
import { TodoList } from './components'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'


let items = [
  {
    id: 1,
    title: "Do the dishes",
    complete: false
  },
  {
    id: 2,
    title: "Watch football",
    complete: true
  }
];

ReactDOM.render(
    <Provider store={createStore(todoApp)}>
      <TodoList items={items} />
    </Provider>,
    document.getElementById('todo-app')
);
