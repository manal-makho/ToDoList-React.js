import React from 'react';
import './App.css';
import TodoList from './Components/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoList />
      </header>
    </div>
  );
}

export default App;