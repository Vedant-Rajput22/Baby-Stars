import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="min-h-screen bg-base-200 transition-colors duration-300" data-theme="dark">
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />}/>
      </Routes>
    </div>
  )
}

export default App

