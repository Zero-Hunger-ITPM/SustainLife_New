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
import ExchangeFood from "./pages/self_employeed/exchnage_self_employeed";
import Addemployee from "./pages/self_employeed/Addemployee";
import AdminEmp from "./pages/self_employeed/AdminEmployee";
import AdminExc from "./pages/self_employeed/AdminExchange";
import AdminOrganization from "./pages/donation/AdminOrganization";
import Donation from "./pages/donation/Donation";
import Organization from "./pages/donation/Organization";
import UpdateOrganization from "./pages/donation/UpdateOrganization";
import AdminRes from "./pages/restaurant/AdminRes";
import AdminPro from "./pages/restaurant/AdminPro";
import ExchangeItemAdd from "./pages/self_employeed/exchangeitemAdd";
import UpdateItem from "./pages/self_employeed/updateItem";
import UpdateSelfEmployee from "./pages/self_employeed/updateSelfEmployee";


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
        <Route path='/UpdateOrganization/:id' element={<UpdateOrganization/>}/>
        <Route path='/ExchangeFood' element={<ExchangeFood/>}/>
        <Route path='/Employee' element={<Addemployee/>}/>
        <Route path='/AdminEmp' element={<AdminEmp/>}/>
        <Route path='/AdminExc' element={<AdminExc/>}/>
        <Route path='/AdminOrganization' element={<AdminOrganization/>}/>
        <Route path='/Donation' element={<Donation/>}/>
        <Route path='/Organization' element={<Organization/>}/>
        <Route path='/AdminRes' element={<AdminRes/>}/>
        <Route path='/AdminPro' element={<AdminPro/>}/>
        <Route path='/ExchangeItemAdd' element={<ExchangeItemAdd/>}/>
        <Route path='/UpdateItem/:id' element={<UpdateItem/>}/>
        <Route path='/UpdateSelfEmployee/:id' element={<UpdateSelfEmployee/>}/>
        </Routes> 
    </Router>
  );
    
}

export default App;
