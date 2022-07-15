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