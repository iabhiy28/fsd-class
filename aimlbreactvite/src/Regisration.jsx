import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Registration({regData}) {
  const [name ,setName] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [myData , setData] = useState();
  const [checked ,setChecked]  = useState(false);

  function getData(event) {
    event.preventDefault();
    alert(`HI ${name}`);
    const data  = {
      name, email , password
    }
    setData(data)
  }

  return (
    <div>
      <h1 className='text-center'>Registration Form</h1>
      <div>{JSON.stringify(myData)}</div>
      <form onSubmit={getData}>
      <div className="m-5">
          <label htmlFor="exampleInputName" className="form-label">Name</label>
          <input
            type="name"
            className="form-control"
            id="exampleInputName"
            aria-describedby="nameHelp"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </ div>
        <div className="m-5">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="m-5">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="m-5 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          <label htmlFor="exampleCheck1" className="form-check-label">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary m-5">Submit</button>
      </form>
    </div>
  );
}

export default Registration;
