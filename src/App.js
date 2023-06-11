import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import "./styles/App.scss";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/contact";
import Donate from "./components/Donate";

import Footer from "./components/footer";

import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/work.scss";
import "./styles/work.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";






function App() {
  return (
    <>
   <Router>
    <Header />
  
    <Routes>
      <Route path="/" element={<Home />}/>
      
      <Route path="/contact" element={<Contact />}/>
      <Route path="/donate" element={<Donate />}/>
     </Routes>
   
    <Footer/>
  </Router>;
    </>
  );
}

export default App;
