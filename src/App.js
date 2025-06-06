import {Component} from 'react'; // Import Component from React
import "./App.css" // Import App CSS
import Person from './Person/Person'; // Import Person component

class App extends Component{

  constructor(props){
    super(props); // Call parent constructor
    console.log("1 - App.js constructor"); // Log constructor call
  }

  componentWillMount(){
    console.log("2 - App.js componentWillMount"); // Log will mount
  }

  state={
    persons: [ // Array of person objects
      {id:1,name: "Krunal", age: 39}, // Person 1
      {id:2,name: "Virat", age: 43}, // Person 2
      {id:3,name: "John", age: 45}   // Person 3
    ],
    showPersons:false // Flag to show/hide persons
  }

  togglePersonsHandler=()=>{
    const doesShow = this.state.showPersons; // Get current showPersons value
    this.setState({showPersons: !doesShow}); // Toggle showPersons
  }

  switchNameHandler=()=>{
    // console.log("Button Clicked");
    //this.state.persons[0].name="JPMC" // Directly modifying state is not possible in React
    // this.setState({
    //   persons: [
    //     {id:1,name: "JPMC", age: 39},
    //     {id:2,name: "Virat", age: 43},
    //     {id:3,name: "John", age: 75}
    //   ]
    // });
    //const newPerson = this.state.persons // This is a reference to the original array
    //const newPerson = this.state.persons.slice(); // This creates a shallow copy of the array
    const newPerson = [...this.state.persons]; // Create a shallow copy of persons array
    newPerson[0].name = "JPMC"; // Change name of first person
    newPerson[2].age = 75; // Change age of third person
    this.setState({persons: newPerson}); // Update state with new persons array
  }

  deletePersonHandler=(personIndex)=>{
    const newPersons = [...this.state.persons]; // Create a shallow copy of persons array
    newPersons.splice(personIndex, 1); // Remove person at specified index
    this.setState({persons: newPersons}); // Update state with new persons array
  }

  componentDidMount(){
    console.log("4 - App.js componentDidMount"); // Log did mount
  }

  componentDidUpdate(){
    console.log("5 - App.js componentDidUpdate"); // Log did update
  }

  render(){

    console.log("3 - App.js render"); // Log render

    let mydata=null // Variable to hold persons JSX
    if(this.state.showPersons){ // If showPersons is true
      mydata=(
        <div>
          {this.state.persons.map((person,index)=>{ // Map each person to a Person component
            return <Person name={person.name}
                           age={person.age}
                           key={person.id}
                           updatePerson={this.switchNameHandler}
                           deletePerson={()=>this.deletePersonHandler(index)}/>
          })}
        </div>
      )
    }
   
    return(
      <div className='App'>
        <h1>Welcome to React Application</h1> {/* App title */}
        <button onClick={this.togglePersonsHandler}>Switch Name</button> {/* Toggle persons button */}
        {mydata} {/* Render persons if showPersons is true */}
        
      </div>
    )
  }

}

export default App // Export App component

/*
Explanation:
- This file defines the main App component for the React application.
- It manages a list of persons in its state and can show/hide them.
- The App component provides handlers to toggle the display, update a person's name/age, and delete a person.
- It uses the Person component to render each person in the list.
- Lifecycle methods are used to log component events for demonstration.
*/