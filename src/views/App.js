import logo from './logo.svg';
import React from 'react';
import './App.scss';
import MyComponent from './Example/MyComponent';
import ListTodo from './Todos/ListTodo';

/**
 * 2 loại components
 * class components
 * function components
 * JSX 
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          todo app with datle
        </p>

        {/* <MyComponent /> */}
        <ListTodo />
      </header>

    </div>
  );
}

export default App;
