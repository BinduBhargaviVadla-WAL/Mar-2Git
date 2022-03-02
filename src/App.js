import logo from './logo.svg';
import './App.css';
import Register from './Register';
import Login from './Login';
import Members from './Members';
import {Routes, Route, Link, BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className='main'>
      <Link to='/register' ><button className='btn'>Register</button></Link><br/>
      <Link to='/login'><button className='btn'>Login</button></Link><br/>
      <Link to='/members'><button className='btn'>Current Member</button></Link> <br />
      </div>
      

      
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/members' element={<Members />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
