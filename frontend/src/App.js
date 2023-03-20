import{BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";

/* Add ToastContainer Notification */
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

/* Home Page */
import Home from "./components/home";

function App() {

  return(
    <Router>

      {/* <ToastContainer/> */}

      <Routes>
        
        {/* Home Page */}
        <Route path='/' element={<Home/>}/>

        
        </Routes> 
    </Router>
  );
    
}

export default App;
