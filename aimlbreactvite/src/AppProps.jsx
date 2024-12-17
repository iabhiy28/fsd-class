import React, { createContext, useContext } from 'react'
import Child1 from './ComponentProps/child1'


export const  BuildContext= createContext();

function AppProps() {
  return (
    <div>
        <BuildContext.Provider value={{
            name: "Abhishek Yadav",
            branch: "AIML",
            section: "B"
        }}>
        <Child1 />
        </BuildContext.Provider>
    </div>
  )
}

export default AppProps