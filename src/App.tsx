import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Firework from "./pages/FireworkPage";

function App(){

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/firework' element={<Firework/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App;