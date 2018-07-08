import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      title: 'This is students table' , 
      studentsList: [
        {name: 'nadav' , id: 1},
        {name: 'elad' , id: 2},
        {name: 'meir' , id: 3}
      ]
    };
    this.remove = this.remove.bind(this);
  }
  remove(event) {

    var id = event.target.id;
    var new_list = this.state.studentsList.filter(item => item.id !=id);

   this.setState(
     {
      studentsList: new_list
     }
   ); 
    alert('remove ' + event.target.id);
  }

  render() { 
    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <ui className = "passengers">
          {
            this.state.studentsList.map(student =>{
            return (
              <li onClick={this.remove} id={student.id} >{student.name}</li>
            );
          })
          }
          </ui>
         
      
      </div>
    );
  }
}

export default App;
