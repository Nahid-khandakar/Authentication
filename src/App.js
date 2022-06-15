import { Routes, Route } from "react-router-dom"
import './App.css';
import CreateCandidate from "./Pages/CreateCandidate";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from './Pages/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UpdateCandidate from "./Pages/UpdateCandidate";


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>

        <Route path="/createcandidate" element={<CreateCandidate></CreateCandidate>}></Route>
        <Route path='/update/:id' element={<UpdateCandidate></UpdateCandidate>}></Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
