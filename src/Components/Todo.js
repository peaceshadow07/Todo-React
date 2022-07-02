import React, { Component } from 'react'

export default class Todo extends Component {

    constructor(){
        super();
        this.state = {
            tasks : [{id: 1, task:"My first day in school!!"}],
            currTask:"",
        }
    }
    
    handleChange = (e)=>{

        this.setState({
            tasks : this.state.tasks,
            currTask : e.target.value,
        });
    }

    handleSubmit = ()=>{
        this.setState({
            tasks : [...this.state.tasks, {task : this.state.currTask, id : this.state.tasks.length + 1}],
            currTask : "",
        });
    }

  render() {
    return (
      <div>
        <input type = "text"
        value = {this.state.currTask} 
        onChange={this.handleChange}/>
        <button onClick={this.handleSubmit}>Submit</button>
        {
            this.state.tasks.map((taskObj) =>{
                return(
                    <li key={taskObj.id}>
                    <p>{taskObj.task}</p>
                    <button>Delete</button>
                    </li>);
            })
        }
        </div>
    )
  }
}
