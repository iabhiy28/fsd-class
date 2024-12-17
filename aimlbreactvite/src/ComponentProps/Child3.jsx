import React, { useContext } from 'react'
import { BuildContext } from '../AppProps';

function Child3() {
    const {name, branch , section} = useContext(BuildContext);
  return (
    <div>
        <p>{name}</p>
        <p>{branch}</p>
        <p>{section}</p>
    </div>
  )
}

export default Child3