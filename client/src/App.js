import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from "./components/BubblePage";
import PrivateRoute from "./components/PrivateRoute";

import "./styles.scss";

function App() {
  // const [colorList, setColorList] = useState([]);

  return (
    <Router>
      <div className="App">
        <Link to='/bubblepage'> Bubble Page </Link>
        <Route exact path="/" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <PrivateRoute path="/bubblepage" component={BubblePage} />

      </div>
    </Router>
  );
}

export default App;
