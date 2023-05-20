import React,{useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios"; 
import swal from "sweetalert2";
import "./Admin.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { exportToCSV } from "../utils";

function Admin(){
    const [restaurant, setRestaurant] = useState([])
    const [RestaurantSearch , setcrsSearch] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8000/api/RegRestaurant/all").then(res => {
           setRestaurant(res.data);
           console.log(res.data);
        })		
        }, []) 

        const Delete = (id) => {
            axios.delete(`http://localhost:8000/api/RegRestaurant/${id}`).then((res) => {
              alert("Restaurant Deleted Successfully!");
              swal.fire({
                title: "Restaurant Deleted Successfully !!.",
                icon: "success",
                confirmButtonText: "OK",
                  }).then(function () {
                      // Redirect the user
                      window.location.href = "/AdminRes";
                    });
            });
          };


    return(
        <div>
            <Header/>
         <div class="h1 text-center text-dark" id="pageHeaderTitle">Restaurant Admin Dashboard</div>

         <div class="card shodow mb-4">
           <div class="card-header py-3">
           <div>
                            <button  class="btn btn-secondary" data-toggle="modal"  > <Link to={`/RestaurantForm/`} > Add New Restaurant</Link>  </button>
                            </div>

                            <div className="input-group" style={{ width: "30rem",  }}>
                       <div class="srch"> <input type="search"  onChange ={(e)=>{setcrsSearch(e.target.value); }} className="form-control rounded" placeholder="Search Product" aria-label="Search" aria-describedby="search-addon" />
                <button type="button" id="srbttn"  className="btn btn-col" style={{color:"white"}}><i class="fa fa-search"></i></button></div>
         </div>
         
            <div class="card-body">
        <div class="table-responsive">
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
               <thead>
                   <tr>
                       <th>Image&nbsp;</th>
                       <th>Restaurant Name</th>
                       <th>Address&nbsp;</th>
                       <th>City</th>
                       <th>Telephone</th>
                       <th>Category</th>
                       <th>Email</th>
                   </tr>
               </thead>
               <tbody>
                  
               {restaurant && restaurant.filter(value=>{
            if(RestaurantSearch ===""){
                return value;
            }else if(
                value.restaurantName.toLowerCase().includes(RestaurantSearch.toLowerCase())
            ){
                return value
            }
        }).map((rest, i) => (

                            <tr data-status="active">
                               <td>{rest.image}</td>
                               <td>{rest.restaurantName}</td>
                               <td>{rest.addrLine1}</td>
                               <td>{rest.city}</td>
                               <td>{rest.telephone}</td>
                               <td>{rest.category}</td>
                               <td>{rest.email}</td>
                               
         
                    <td>
                    <Link
                    className="btn btn-danger"
                    to="#"
                    onClick={() => Delete(rest._id)}
                  >
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </Link>
                     </td>
                     <td>
                     <button className="btn btn-warning"> <a href="mailto://mail.google.com/"> Send Mail </a></button>
                     </td>
                     </tr>

                        ))}
                  
               </tbody>
           </table>

           <div className="row-2">
                    <div className="col"style={{ textAlign: "right",float:"left"  }}>
                            <Link to="/RestaurantHomeNew" className="btn btn-danger">Back</Link><br></br>
                        </div>
                        <button
            onClick={() => {
                const restaurants = restaurant.map(res => {
                    let res1 = res;
                    delete res1.image;
                    return res1;
                })

                exportToCSV(restaurants, "Restaurants");
            }}
            type="button"
          >
            Download Report
          </button>
                    </div>
           
       </div> 
   </div>   
</div> 
<Footer/> 
        </div>
      
</div>
    );
    }
export default Admin;