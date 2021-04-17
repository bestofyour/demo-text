import React from 'react';
import ReactDom from 'react-dom';
import './style/index.scss';


const arr = _.chunk(['a', 'b', 'c', 'd'], 2);

const click =(arr)=> {
  console.log(arr)
}


const div = <div className="title" onClick={click}>1111</div>


function App() {
  return div;
}

export default App;
