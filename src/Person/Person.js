import "./Person.css" // Import Person CSS

const Person=(props)=> { // Functional component Person with props
    
 return(
    <div className="Person"> {/* Container div with Person class */}
    
        <p onClick={props.deletePerson}>I am {props.name} and I am {props.age} years old !</p> {/* Display name and age, delete on click */}
        <p>{props.children}</p> {/* Render any children passed to Person */}
        <button onClick={props.updatePerson}>Update Button</button> {/* Button to trigger updatePerson handler */}
    </div>
 )
}

export  default Person // Export Person component

/*
Explanation:
- This file defines a functional Person component.
- It displays a person's name and age, and provides a button to update the person.
- The component also allows deleting the person by clicking on the name/age line.
- Any children passed to the component are rendered as well.
*/



