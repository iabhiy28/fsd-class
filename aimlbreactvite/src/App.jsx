import Registration from './Regisration.jsx';
import Login from './Login.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import { useState } from 'react';


function App() {
  const [shareData , setShareData] = useState();
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />}> 
        <Route path="/registration" element={<Registration regData={setShareData}/>} />
        <Route path="/login" element={<Login regData={shareData}/>} />
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;