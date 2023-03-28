import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const navigation = () => {

  return (
  <div>
    <Router>
        <Routes>
          <Route path="/settings" element={ <Settings />}/>        
          <Route exact path="/" element={<Home />}>
          </Route>
        </Routes>
    </Router>
  </div>)
}

export default navigation;