import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Firework from "./pages/FireworkPage";
import Scroll from "./pages/ScrollPage";
import Universe from "./pages/UniversePage";
import Three from "./pages/ThreePage";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/firework" element={<Firework />} />
                    <Route path="/scroll" element={<Scroll />} />
                    <Route path="/universe" element={<Universe />} />
                    <Route path="/Three" element={<Three />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
