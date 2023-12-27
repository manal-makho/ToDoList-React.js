import React from 'react';
import Todo from './Todo';
import './TodoList.css'; 

const TodoList = () => {
  const todos = [
    { id: 1, task: 'My Graduation Project' },
    { id: 2, task: 'Development Training' },
    { id: 3, task: 'QA Project' },
    { id: 4, task: 'OS Project' },
    { id: 5, task: 'VR Project' },
  ];

  return (
    <div className="todo-list-container">
      <h2>My TodoList</h2>
      <ol type='I' className="centered-list">
        {todos.map(todo => (
          <li>
          <Todo key={todo.id} task={todo.task} />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TodoList;
