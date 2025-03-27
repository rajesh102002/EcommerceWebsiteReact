// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";  // Make sure you're importing from "react-router-dom"
import Home from './pages/Home';
import Footer from './components/Footer'
import Shop from './pages/Shop';  // Correct path
import Navbar from "./components/Navebar";
import FilterData from "./pages/FilterData";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />  
          <Route path="/filter-data" element={<FilterData />} />  
          <Route path="/login" element={<Login />} />  
          <Route path="/register" element={<Register />} />  

        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
