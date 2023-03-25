import{BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";

/* Add ToastContainer Notification */
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

/* Home Page */
import Home from "./components/home";
import RegRestaurantForm from "./pages/restaurant/RegRestaurantForm";

function App() {

  return(
    <Router>

      {/* <ToastContainer/> */}

      <Routes>
        
        {/* Home Page */}
        <Route path='/' element={<Home/>}/>
        <Route path='/RestaurantForm' element={<RegRestaurantForm/>}/>
        
        </Routes> 
    </Router>
  );
    
}

export default App;
