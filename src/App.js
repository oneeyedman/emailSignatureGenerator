import React, { Component } from 'react';
import './App.css';
import Form from './components/Form.js';
import Preview from './components/Preview.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {}
    this.updateData = this.updateData.bind(this);
  }

  updateData(prop, value) {
    const newState = {}
    newState[prop] = value;
    this.setState(newState);
  }

  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <Form updatePreview={this.updateData} />
            <Preview fullname={this.state.fullName} email={this.state.email} role={this.state.role} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
