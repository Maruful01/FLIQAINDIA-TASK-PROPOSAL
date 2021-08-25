import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import Services from './Component/Services/Services';
import { Helmet } from 'react-helmet';

const metaContentFirstPage = {title: "FliqaIndia",  description: "Personalised platforms for Photography, Videography withGraphics. One of the leading platforms in the creative domain." };

const metaContentSecondPage = {title: "Logo Design",  description: "Make your own brand identity through us. Start your design now." };

function App() {
  
  return (
    <div className="App">
        <Helmet>
            <title>{metaContentFirstPage.title}</title>
            <meta name="description" content={metaContentFirstPage.description} />
        </Helmet>
       <Router>
      <div>
        <nav className="nav-bar">
          <ul>
            <li>
              Fliqa India
            </li>
             <li className="home">
              <Link style={{textDecoration: "none", color: "black",}} to="/">HOME</Link>
             </li>
             <li>
              <Link style={{textDecoration: "none", color: "black"}} to="/services">ABOUT US</Link>
             </li>
            <li>
              <Link style={{textDecoration: "none", color: "black"}} to="/services">SERVICES</Link>
            </li>
            <li>
              <Link style={{textDecoration: "none", color: "black"}} to="/services">FREELANCERS</Link>
            </li>
            <li>
              <Link style={{textDecoration: "none", color: "black"}} to="/services">BLOG</Link>
            </li>
            <li>
              <Link style={{textDecoration: "none", color: "black"}} to="/services">TUTORIAL</Link>
            </li>
            <li>
              <Link style={{textDecoration: "none", color: "black"}} to="/services">CONTACT US</Link>
            </li>
          </ul>
        </nav>

        <Switch>

          <Route exact path="/">
            <Home metaContentFirstPage={metaContentFirstPage}/>
          </Route>

          <Route path="/services">
            <Services metaContentSecondPage={metaContentSecondPage}/>
          </Route>

        </Switch>
      </div>
    </Router>
      
    </div>
  );
}

export default App;
