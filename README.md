
TITLE : HOW TO PASS DATA FROM CHILD COMPONENT TO PARENT COMPONENT.

1. Create Parent file and Child file with js or jsx extension.


2. Create function in Parent and child file, fucntion name always start with Capital letter. 
ex: 
import React,{useState} from 'react';
function Parent(){
  return(
    <>
    </>
   )
}
export default Parent;


3.  Now Create Child file this Child file import in Parent component and call it under return function.

4. Now create a function called childToParent in the Parent file and pass  as a  props to the child Component.
ex:

import React,{useState} from 'react';
import Child from './child'

function Parent(){
  
  const childToParent = (childData) =>{
   
  }
  return(
    <>
    <Child childToParent={childToParent}/>
    <h2>{data}</h2>
    </>
    )
}
export default Parent;

5. In the Child Component use function as a props.

6. In the child file create a variable called data and pass a string like "Child data pass to Parent componet";

7. Now Create a button in Child component and pass  this props function on the Event click function i.e. onClick and pass data variable.  
Example:
import React from 'react';

function Child({childToParent}){
	const data = ' child data to parent data';
	return(
		<>
		<p>Child Component</p>
		<button onClick={() =>childToParent(data)}>clickbtn</button>
		</>
		)
} 
export default Child;

8. Now In the Parent file create a state Because we will set our data while click on the button.


9. Now in the parent file function i.e.childToParent pass child props which we have pass in the child file to ChildToParent function.


10. Now set the  state with child props data.  
function Parent(){
  const[data, setData] = useState();
  const childToParent = (childData) =>{
    setData(childData)

  }
  return(
    <>
    <Child childToParent={childToParent}/>
    <h2>{data}</h2>
    </>
    )
}
export default Parent; 


11. In the output when click on the button show the child data which we have pass as a props to the Parent Component.

Thank You!





