import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ResponsiveAppBar from "./pages/appbar";
import Services from './pages/services.js'

function App() {
  return (
    <Router>
      <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/services" element={<Services/>} />
       </Routes>
    </Router>
    
  );
}

export default App;
