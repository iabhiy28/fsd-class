import React from 'react'
import Child3 from './Child3'
import { useContext } from 'react'
import { BuildContext } from '../AppProps'

function child2() {
    const {section} = useContext(BuildContext);
  return (
    <div>
        <p>Section:{section}</p>
        <Child3 />
    </div>
    
  )
}

export default child2