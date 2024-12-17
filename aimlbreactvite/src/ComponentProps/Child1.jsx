import React, { useContext } from 'react'
import Child2 from './Child2';
import { BuildContext } from '../AppProps';
function child1() {
    const { name } = useContext(BuildContext);
  return (
    <div>
        <p>Name: {name}</p>
        <Child2 />
    </div>

  )
}

export default child1