import './App.css';
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import QuizContent from "./components/Quiz";
import Settings from "./components/Settings";

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
            <Route path="/quiz">
              <QuizContent />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>            
            <Route exact path="/">
              <Home />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
