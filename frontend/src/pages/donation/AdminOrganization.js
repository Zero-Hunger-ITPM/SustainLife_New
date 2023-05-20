import React,{useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios"; 
import swal from "sweetalert2";
import "./Admin.css";
import Header from "../../components/header";
import Footer from "../../components/footer";

function AdminOrganization(){
    const [organization, setOrganization] = useState([])
    const [OrganizationSearch , setSearch] = useState("");

    useEffect(()=>{
        getAllOrganization();
      },[])
      const getAllOrganization= ()=>{
        axios.get("http://localhost:8000/api/AddOrgan/all").then((response)=>{
          console.log(response.data);      
          setOrganization(response.data)
        })
    }
        const Delete = (id) => {
            axios.delete(`http://localhost:8000/api/AddOrgan/${id}`).then((res) => {
              alert("Organization Deleted Successfully!");
              swal.fire({
                title: "Organization Deleted Successfully !!.",
                icon: "success",
                confirmButtonText: "OK",
                  }).then(function () {
                      // Redirect the user
                      window.location.href = "/AdminOrganization";
                    });
            });
          };

    return(
        <div>
            <Header/>
         <div class="h1 text-center text-dark" id="pageHeaderTitle"> Admin Dashboard</div>

         <div class="card shodow mb-4">
           <div class="card-header py-3">
           <div>
                            </div>

                            <div className="input-group" style={{ width: "30rem",}}>
                       <div class="srch"> <input type="search"  onChange ={(e)=>{setSearch(e.target.value); }} className="form-control rounded" 
                       placeholder="Search Product" aria-label="Search" aria-describedby="search-addon"/>
                <button type="button" id="srbttn"  className="btn btn-col" style={{color:"white"}}><i class="fa fa-search"></i>
                </button>
                </div>
         </div>
         
            <div class="card-body">
        <div class="table-responsive">
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
              <thead>
                                        <tr>
                                        <th scope="col">Organization name</th>
                                            <th scope="col">Organization contact no</th>
                                            <th scope="col">Organization address</th>
                                            <th scope="col">Organization donation need type</th>
                                            <th scope="col">Organization member count</th> 
                                            <th scope="col">Organization location</th>  
                                            <th scope="col">Delete</th> 
                                            <th scope="col">Update</th>    
                                        </tr>
                                    </thead>
                                    <tbody>
                  
               {organization && organization.filter(value=>{
            if(OrganizationSearch ===""){
                return value;
            }else if(
                value.location.toLowerCase().includes(OrganizationSearch.toLowerCase())
            ){
                return value
            }
        }).map((organization, i) => (

                            <tr data-status="active">
                                 <td>{organization.organization_name}</td>
                                                <td>{organization.o_phone_no}</td>
                                                <td>{organization.address}</td>
                                                <td>{organization.o_donation_type}</td>
                                                <td>{organization.d_qty}</td> 
                                                <td>{organization.location}</td>
                    <td>
                    <Link
                    className="btn btn-danger"
                    to="#"
                    onClick={() => Delete(organization._id)}
                  >
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </Link>
                     </td>
                     <td>
                     <button className="btn btn-warning"  > <Link to={`/UpdateOrganization/${organization._id}`}> Update </Link>  </button>
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
export default AdminOrganization;