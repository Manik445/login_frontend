import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashbard from "./components/Dashbard";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";  


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup/>}/>  
          <Route path="/login" element={<Login/>}/>
          <Route path="/dashboard" element={<Dashbard/>} />  
      </Routes>     
      </BrowserRouter>
    </div>
  );   
}

export default App;
