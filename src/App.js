import React, { Component } from 'react';
import './App.css';
import CreateTest from "./components/createTest/createTest"

class App extends Component {
  render() {
    return (
      <div className="App">
       <CreateTest />
      </div>
    );
  }
}

export default App;
