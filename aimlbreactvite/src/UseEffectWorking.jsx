import React, { useEffect, useState } from 'react'

function UseEffectWorking() {

    const [count, setCount] = useState(0);
    useEffect(function(){
        const inter = setInterval(function(){
            setCount(count => count + 1);
        },1000);
        return() =>{
            clearInterval(inter);
        }

    },[count]);
  return (
    <div>
        <h1>{count}</h1>
    </div>
  )
}

export default UseEffectWorking