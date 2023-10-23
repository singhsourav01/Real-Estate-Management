import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route exact path="/Login" element={<Login />}></Route>
          <Route exact path="/Signup" element={<Signup />}></Route>

        </Routes>
  </BrowserRouter>  
    </>
  );
}

export default App;
