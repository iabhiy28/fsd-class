import {reaact , useState} from 'react';


function StudentState() {
    const [count , setCount] = useState(0);


    const handleClick = () =>{
        setCount(count+1);
    }
    const handleReset = () =>{
        setCount(0);
    }
  return (
    <div style={{alignItems: 'center'}}>
        <h1>{count}</h1>
        <button onClick={handleClick}>Click Me</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default StudentState