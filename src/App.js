import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Hello World Arun!</h1>
        <p className="App-subtitle">Welcome to your React.js sample site</p>
        <div className="App-content">
          <div className="card">
            <h2>🎉 Congratulations!</h2>
            <p>You've successfully created a React.js application.</p>
          </div>
          <div className="card">
            <h2>🚀 What's Next?</h2>
            <p>Start building amazing web applications with React!</p>
          </div>
          <div className="card">
            <h2>💡 Features</h2>
            <ul>
              <li>Modern React 18</li>
              <li>Webpack bundling</li>
              <li>Hot reloading</li>
              <li>Beautiful UI</li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
