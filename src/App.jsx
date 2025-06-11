
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from './Component/Dashboard/Dashboard';


function App() {

  return (
    <>
     <Routes>
        <Route path="/" element={<Dashboard/>} />
        {/* <Route path="/about" element={<About />} />
  
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  )
}

export default App
