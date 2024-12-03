import React from 'react'
import './App.css'
import Student from './Student.jsx'
import logo from './assets/OIP (1).jpeg'
import StudentState from './StudentState.jsx';
import ImageMani from './ImageMani.jsx';
import UseEffectWorking from './UseEffectWorking.jsx';

function App() {

  let outerStyle = {
    backgroundColor: "yellow"

  }

  let a =20;

  let mystyle ={
    backgroundColor : 'cyan',
    color:'red',
    border:'10px solid black',
    height : '100px',
    

  }

  const student_data = {
    name : "Abhishek",
    roll : 10,
    college: "ABES Engineering College",
    sec : "B",
    branch : "Aiml",
    pic : 'https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/car_4.png'
    
  }
  return (
    <div>
      {/* //<StudentState /> */}
      {/* <ImageMani /> */}
      <UseEffectWorking />
    </div>

   

    //<div style={{color:'black'}}> 
   // {/* <h2>App</h2> */}


    //{/* <Student college="ABES Engineering College" sec="B" roll="45" name = "Seth" branch ="Aiml" pic = {<img src={logo} height={100} width={100}/>}/>
    //<Student  sec="B" roll="46" name = "Tomar" branch ="Aiml" pic = {<img src={logo} height={100} width={100}/>}/>
    //<Student college="ABES Engineering College" sec="B" roll="47" name = "Diwedi" branch ="Aiml" pic = {<img src={logo} height={100} width={100}/>}/> */}

    //<Student data = {student_data}/>





    //</div>
  )
}

export default App