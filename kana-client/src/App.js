import './App.css';
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import QuizContent from "./components/Quiz";
import Settings from "./pages/Settings";
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle``;

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/quiz" element={<QuizContent />}/>
          <Route path="/settings" element={ <Settings />}/>        
          <Route exact path="/" element={<Home />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
