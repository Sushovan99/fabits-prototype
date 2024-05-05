import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/routes/index";
import Project1 from "@/routes/project1";
import Project2 from "@/routes/project2";

const App: React.FunctionComponent = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project1" element={<Project1 />} />
                <Route path="/project2" element={<Project2 />} />
            </Routes>
        </Router>
    );
};

export default App;
