import React from 'react'
import './Student.css'
import logo from './assets/OIP (1).jpeg'

function Student({data}) {
  return (
    <div className='icard'>
      
      <table>
        <tbody>
            <tr>
                <td colSpan={2}>{data.college}</td>
            </tr>
            <tr>
                <td colSpan={2}><img src={logo} alt="" height={100} width={100}/></td>
            </tr>
            <tr>
                <td>Roll : </td>
                <td>{data.roll}</td>
            </tr>
            <tr>c
                <td>Name:</td>
                <td>{data.name}</td>
            </tr>
            <tr>
                <td>Branch :</td>
                <td>{data.branch}</td>
            </tr>
            <tr>
                <td>Section</td>
                <td>{data.sec}</td>
            </tr>
        </tbody>
      </table>


      {/* {
        JSON.stringify(data)
      } */}

    

    </div>
  )
}

// Student.defaultProps={
//     college:"AKG Engineering College"
// }

export default Student