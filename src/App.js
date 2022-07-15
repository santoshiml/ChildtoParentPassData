import React,{useState} from 'react';
import Child from './child'

function App(){
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
export default App;
