import React from 'react'
import Child1 from './ComponentProps/child1'

function AppProps() {
    const  studentData = {
        name: "Abhishek Yadav",
        branch: "AIML",
        section: "B"
    }
  return (
    <div>
    <div>AppProps</div>
    <Child1 child1Data={studentData}/>
    </div>
  )
}

export default AppProps