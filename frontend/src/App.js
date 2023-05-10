import{BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";

/* Add ToastContainer Notification */
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

/* Home Page */
import Home from "./components/home";
import RegRestaurantForm from "./pages/restaurant/RegRestaurantForm";
import AddProductsForm from "./pages/restaurant/AddProductsForm";
import RestaurantHome from "./pages/restaurant/RestaurantHome";
import FoodItemDetails from "./pages/restaurant/FoodItemDetails";
import UpdateProducts from "./pages/restaurant/UpdateProducts";


function App() {

  return(
    <Router>

      {/* <ToastContainer/> */}

      <Routes>
        
        {/* Home Page */}
        <Route path='/' element={<Home/>}/>
        <Route path='/RestaurantForm' element={<RegRestaurantForm/>}/>
        <Route path='/ProductForm' element={<AddProductsForm/>}/>
        <Route path='/RestaurantHome' element={<RestaurantHome/>}/>
        <Route path='/FoodItemDetails' element={<FoodItemDetails/>}/>
        <Route path='/UpdateProducts' element={<UpdateProducts/>}/>
        </Routes> 
    </Router>
  );
    
}

export default App;
