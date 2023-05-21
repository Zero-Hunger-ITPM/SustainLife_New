import React,{useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios"; 
import swal from "sweetalert2";
import "./Admin.css";
import Header from "../../components/header";
import Footer from "../../components/footer";

function AdminEmp(){
    const [employee, setEmployee] = useState([])
    const [EmployeeSearch , setcrsSearch] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8000/api/AddEmployee/all").then(res => {
           setEmployee(res.data);
           console.log(res.data);
        })		
        }, []) 

        const Delete = (id) => {
            axios.delete(`http://localhost:8000/api/AddEmployee/${id}`).then((res) => {
              alert("Employee Deleted Successfully!");
              swal.fire({
                title: "Employee Deleted Successfully !!.",
                icon: "success",
                confirmButtonText: "OK",
                  }).then(function () {
                      // Redirect the user
                      window.location.href = "/AdminEmp";
                    });
            });
          };

    return(
        <div>
            <Header/>
         <div class="h1 text-center text-dark" id="pageHeaderTitle">Employee Admin Dashboard</div>

         <div class="card shodow mb-4">
           <div class="card-header py-3">
           <div>
                            <button  class="btn btn-secondary" data-toggle="modal"  > <Link to={`/Employee`} > Add New Employees </Link>  </button>
                            </div>

                            <div className="input-group" style={{ width: "30rem",  }}>
                       <div class="srch"> <input type="search"  onChange ={(e)=>{setcrsSearch(e.target.value); }} className="form-control rounded" placeholder="Search Items" aria-label="Search" aria-describedby="search-addon" />
                <button type="button" id="srbttn"  className="btn btn-col" style={{color:"white"}}><i class="fa fa-search"></i></button></div>
         </div>
         
            <div class="card-body">
        <div class="table-responsive">
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
               <thead>
                   <tr>
                       <th>Name&nbsp;</th>
                       <th>Image</th>
                       <th>Addrees&nbsp;</th>
                       <th>City</th>
                       <th>Telephone</th>
                       <th>Exchange Category</th>
                       <th>Email</th>
                  
                   </tr>
               </thead>
               <tbody>
                  
               {employee && employee.filter(value=>{
            if(EmployeeSearch ===""){
                return value;
            }else if(
                value.Name.toLowerCase().includes(EmployeeSearch.toLowerCase())
            ){
                return value
            }
        }).map((emp, i) => (

                            <tr data-status="active">
                               <td>{emp.Name}</td>
                               <td>{emp.image}</td>
                               <td>{emp.addrLine1}</td>
                               <td>{emp.city}</td>
                               <td>{emp.telephone}</td>
                               <td>{emp.ExchangeCategory}</td>
                               <td>{emp.email}</td>
                             
         
                    <td>
                    <Link
                    className="btn btn-danger"
                    to="#"
                    onClick={() => Delete(emp._id)}
                  >
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </Link>
                     </td>
                     <td>
                     <button className="btn btn-warning"> <Link to={`/UpdateSelfEmployee/${emp._id}`}> Update </Link>  </button>
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
export default AdminEmp;