import React, { Component } from 'react';
import './createTest.scss';


class CreateTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [
        {
          value: "",
          id: 1
        }
      ]
    };
}
  addAnswer = () => {
    const newAnswer =  {
      value: "",
      id: (new Date()).getTime()
    }
    const answersArr = this.state.answers
    answersArr.push(newAnswer)
    this.setState({answers: answersArr})
  }
  onChange = (value, id) => {
  
   const answersArr = this.state.answers
   const foundIndex = answersArr.findIndex(x => x.id === id);
   answersArr[foundIndex].value = value;
   this.setState({ answers: answersArr })
  }
  render() {
    console.log('state', this.state)
    return (
      <div className="test">
        <h1>Create your test</h1>
        <textarea className='question'></textarea>
        {this.state.answers.map(item => <div key={item.id}>
            <textarea onChange={e => this.onChange(e.target.value, e.target.id)} value={item.value} id={item.id}></textarea>
            <input type="radio"></input>
        </div>)}
        <button onClick={this.addAnswer}>Add answer</button>
      </div>
    );
  }
}

export default CreateTest;
