import React from 'react'
import ReactDOM from 'react-dom'
import { TodoList } from './components'


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

ReactDOM.render(<TodoList items={items}/>, document.getElementById('todo-app'));
