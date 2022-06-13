import { Routes, Route } from "react-router-dom"
import './App.css';
import Login from "./Pages/Login";
import Signup from './Pages/Signup';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Signup></Signup>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>


    </div>
  );
}

export default App;
