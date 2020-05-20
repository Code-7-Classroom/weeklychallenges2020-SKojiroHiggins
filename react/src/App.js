import React, { Component } from 'react';
import './App.css';
import Medium from './Medium/Medium';

class Person extends Component {

  render() {
    return (
      <div></div>
    )
  }
}

class App extends Component {
  // easy challenge
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { id: '1', name: 'Max', age: 28, num: '734-971-3046' },
        { id: '2', name: 'Manu', age: 29, num: '518-208-8449' },
        { id: '3', name: 'Stephanie', age: 26, num: '801-590-4291' }
      ]
    }
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    // Hard challenge
  let hard = (
      <div>
        {this.state.persons.map((person, index) => {
          return <Medium
            name={person.name}
            age={person.age}
            num={person.num}
          />
        })}
      </div>
    )

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <div>
          {/* Very-easy challenge */}
          <p>Name: Kojiro</p>
          <p>Age: 23</p>
          <p>Num: 980-202-9533</p>
        </div>
        <div>
          {/* Hard challenge */}
          {hard}
        </div>
      </div>
    );
  }
}

export default App;
