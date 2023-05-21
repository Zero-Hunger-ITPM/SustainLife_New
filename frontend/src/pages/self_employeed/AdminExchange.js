import React,{useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios"; 
import swal from "sweetalert2";
import "./Admin.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { exportToCSV } from "../utils";

function AdminExc(){
    const [exchange, setExchange] = useState([])
    const [ExchangeSearch , setcrsSearch] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8000/api/AddExchangeItem/all").then(res => {
           setExchange(res.data);
           console.log(res.data);
        })		
        }, []) 

        const Delete = (id) => {
            axios.delete(`http://localhost:8000/api/AddExchangeItem/${id}`).then((res) => {
              alert("Item Deleted Successfully!");
              swal.fire({
                title: "Item Deleted Successfully !!.",
                icon: "success",
                confirmButtonText: "OK",
                  }).then(function () {
                      // Redirect the user
                      window.location.href = "/AdminExch";
                    });
            });
          };

    return(
        <div>
            <Header/>
         <div class="h1 text-center text-dark" id="pageHeaderTitle">Exchange Items Admin Dashboard</div>

         <div class="card shodow mb-4">
           <div class="card-header py-3">
           <div>
                            <button  class="btn btn-secondary" data-toggle="modal"  > <Link to={`/ExchangeItemAdd`} > Add New Items</Link>  </button>
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
                       <th>Exchange Item Name&nbsp;</th>
                       <th>Exchange Item Picture</th>
                       <th>Exchange Item Location&nbsp;</th>
                       <th>Exchange Item Contact No</th>
                      
                   </tr>
               </thead>
               <tbody>
                  
               {exchange && exchange.filter(value=>{
            if(ExchangeSearch ===""){
                return value;
            }else if(
                value.exchangeItemName.toLowerCase().includes(ExchangeSearch.toLowerCase())
            ){
                return value
            }
        }).map((exch, i) => (

                            <tr data-status="active">
                               <td>{exch.exchangeItemName}</td>
                               <td>{exch.exchangeItemPicture}</td>
                               <td>{exch.exchangeItemLocation}</td>
                               <td>{exch.exchangeItemContactNo}</td>
                             
         
                    <td>
                    <Link
                    className="btn btn-danger"
                    to="#"
                    onClick={() => Delete(exch._id)}
                  >
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </Link>
                     </td>
                     <td>
                     <button className="btn btn-warning"  > <Link to={`/UpdateItem/${exch._id}`} > Update </Link>  </button>
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
                const exchanges = exchange.map(res => {
                    let res1 = res;
                    delete res1.image;
                    return res1;
                })

                exportToCSV(exchanges, "ExchangeItems");
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
export default AdminExc;