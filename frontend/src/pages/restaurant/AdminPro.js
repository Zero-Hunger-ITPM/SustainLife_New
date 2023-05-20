import React,{useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios"; 
import swal from "sweetalert2";
import "./Admin.css";
import Header from "../../components/header";
import Footer from "../../components/footer";

function Admin(){
    const [product, setProduct] = useState([])
    const [ProductSearch , setcrsSearch] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8000/api/AddProducts/all").then(res => {
           setProduct(res.data);
           console.log(res.data);
        })		
        }, []) 

        const Delete = (id) => {
            axios.delete(`http://localhost:8000/api/AddProducts/${id}`).then((res) => {
              alert("Product Deleted Successfully!");
              swal.fire({
                title: "Product Deleted Successfully !!.",
                icon: "success",
                confirmButtonText: "OK",
                  }).then(function () {
                      // Redirect the user
                      window.location.href = "/AdminPro";
                    });
            });
          };

    return(
        <div>
            <Header/>
         <div class="h1 text-center text-dark" id="pageHeaderTitle">Product Admin Dashboard</div>

         <div class="card shodow mb-4">
           <div class="card-header py-3">
           <div>
                            <button  class="btn btn-secondary" data-toggle="modal"  > <Link to={`/ProductForm/`} > Add New Products</Link>  </button>
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
                       <th>Product Name</th>
                       <th>Regular Price&nbsp;</th>
                       <th>Discount Rate</th>
                       <th>Discounted Rate</th>
                       <th>DOM</th>
                       <th>DOE</th>
                       <th>Restaurant</th>
                       <th>Location</th>
                       <th>Update</th>
                   </tr>
               </thead>
               <tbody>
                  
               {product && product.filter(value=>{
            if(ProductSearch ===""){
                return value;
            }else if(
                value.productName.toLowerCase().includes(ProductSearch.toLowerCase())
            ){
                return value
            }
        }).map((prod, i) => (

                            <tr data-status="active">
                               <td>{prod.Image}</td>
                               <td>{prod.productName}</td>
                               <td>{prod.regularPrice}</td>
                               <td>{prod.discountRate}</td>
                               <td>{prod.discountedPrice}</td>
                               <td>{prod.dOM}</td>
                               <td>{prod.dOE}</td>
                               <td>{prod.restaurant}</td>
                               <td>{prod.location}</td>
         
                    <td>
                    <Link
                    className="btn btn-danger"
                    to="#"
                    onClick={() => Delete(prod._id)}
                  >
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </Link>
                     </td>
                     <td>
                     <button className="btn btn-warning"  > <Link to={`/UpdateProduct/${prod._id}`} > Update </Link>  </button>
                     </td>
                     </tr>

                        ))}
                  
               </tbody>
           </table>
       </div> 
   </div>   
</div> 
<Footer/> 
        </div>
      
</div>
    );
    }
export default Admin;