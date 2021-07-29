import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/navbar";
import LandingPage from "./pages/LandingPage";
import PortfolioPage from "./pages/PortfolioPage";
import AboutPage from "./pages/AboutPage";
import ContactMePage from "./pages/ContactMePage";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/portfolio" component={PortfolioPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/contact" component={ContactMePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
