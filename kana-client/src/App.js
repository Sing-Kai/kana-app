import './App.css';
import Home from "../src/components/pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Questions from "./components/quiz/Questions";
import Settings from "../src/components/pages/Settings";

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/quiz" element={<Questions />}/>
          <Route path="/settings" element={ <Settings />}/>        
          <Route exact path="/" element={<Home />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
