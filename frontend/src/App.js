import{BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";

/* Add ToastContainer Notification */
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

/* Home Page */
import Home from "./components/home";
/* Restaurants Page */
import RegRestaurantForm from "./pages/restaurant/RegRestaurantForm";
import AddProductsForm from "./pages/restaurant/AddProductsForm";
import FoodItemDetails from "./pages/restaurant/FoodItemDetails";
import UpdateProducts from "./pages/restaurant/UpdateProducts";
import RestaurantHomeNew from "./pages/restaurant/RestaurantHomeNew";
import FoodItemDetailsNew from "./pages/restaurant/FoodItemDetailsNew";
import Admin from "./pages/restaurant/Admin";
/* Donation Page */
import Donation from "./pages/donation/donation";
/*Organization  Page */
import Organization from "./pages/donation/organization";
/*login Page */
import Sign_In from "./pages/Sign-in/Sign_In";
/*Admin Organization Page */
import AdminOrganization from "./pages/donation/AdminOrganization";

import UpdateOrganization from "./pages/donation/updateOrganization";

import ExchangeFood from "./pages/self_employeed/exchnage_self_employeed";

import Employee from "./pages/self_employeed/Addemployee";

import AdminEmp from "./pages/self_employeed/AdminEmployee";

import AdminExc from "./pages/self_employeed/AdminExchange";

function App() {

  return(
    <Router>

      {/* <ToastContainer/> */}

      <Routes>
        
        <Route path='/' element={<Home/>}/>
        <Route path='/RestaurantForm' element={<RegRestaurantForm/>}/>
        <Route path='/ProductForm' element={<AddProductsForm/>}/>
        <Route path='/FoodItemDetails' element={<FoodItemDetails/>}/>
        <Route path='/UpdateProduct/:id' element={<UpdateProducts/>}/>
        <Route path='/RestaurantHomenew' element={<RestaurantHomeNew/>}/>
        <Route path='/FoodItemDetailsNew' element={<FoodItemDetailsNew/>}/>
        {/* <Route path='/Payment' element={<Payment/>}/> */}
        <Route path='/ResAdmin' element={<Admin/>}/>
        <Route path='/Donation' element={<Donation/>}/>
        <Route path='/Organization' element={<Organization/>}/>
        <Route path='/Sign_In' element={<Sign_In/>}/>
        <Route path='/AdminOrganization' element={<AdminOrganization/>}/>
        <Route path='/UpdateOrganization/:id' element={<UpdateOrganization/>}/>
        <Route path='/ExchangeFood' element={<ExchangeFood/>}/>
        <Route path='/Employee' element={<Employee/>}/>
        <Route path='/AdminEmp' element={<AdminEmp/>}/>
        <Route path='/AdminExc' element={<AdminExc/>}/>

        
        </Routes> 
    </Router>
  );
    
}

export default App;
