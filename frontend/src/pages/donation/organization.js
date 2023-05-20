import React, {useEffect,useState} from "react";
import "./donation.css";
import axios from "axios";
import swal from "sweetalert2";
import Header from '../../components/header'
import bg from "../../images/orga.png"

export default function Organization(){
    const [organization, setOrganization] = useState([]);
    const [organization_name, setorganization_name] = useState("");
    const [o_phone_no, seto_phone_no] = useState("");
    const [address, setaddress] = useState("");
    const [donation_type, setdonation_type] = useState("");
    const [d_qty, setd_qty] = useState("");
    const [location, setlocation] = useState("");

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

    function saveOrganization(e){
        e.preventDefault();
        alert("Going to add New Donation");
      
        const organization = {
            organization_name,
            o_phone_no,
            address,
            donation_type,
            d_qty,
            location

        };
        if (
            organization.organization_name.length <= 0 ||
            organization.o_phone_no.length <= 0 ||
            organization.address.length <= 0 ||
            organization.donation_type.length <= 0 ||
            organization.d_qty.length <= 0 ||
            organization.location <= 0
         
        ) {
          //setErrors(true);
          return;
        }
        axios.post("http://localhost:8000/api/AddOrgan",organization).then(()=>{
        }).catch((err)=>{
          alert(err)
        });
        swal.fire({
          title: "Organization Added Successfully !!.",
          icon: "success",
          confirmButtonText: "OK",
            }).then(function () {
                // Redirect the user
                window.location.href = "";
              });
      };
  return(
    <div>  
        <Header/>

      {/* <!--=============== Organization ===============--> */}
      <main className="main">
          <div className='home__container Home-container grid'>
                <defs>
                <h1 className='title'>Register Your Organization</h1>
     
                <div className="contact__content">
                         
                                <a><img  className="Home-bg" src={bg} alt="bg"/></a>
                            </div>
                            <clipPath id="clip0">
                <rect width="312" height="236" top="20%" fill="white"/>
                </clipPath>
                </defs>
                <div class="content">
                <h2>Organization Details</h2>
            <hr></hr>
            <div class="form-group">
            <label for="exampleInputEmail1">Organization name</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name"
            value={organization_name} required onChange={(e)=>{
                setorganization_name(e.target.value);}}/>
            </div>
            <div class="form-group">
            <label for="exampleInputEmail1">Organization contact number</label>
            <input type="email" class="form-control"  aria-describedby="emailHelp" placeholder="Enter email"
            value={o_phone_no} required onChange={(e)=>{
                seto_phone_no(e.target.value);}}/>
            </div>
            <div class="form-group">
            <label for="exampleInputEmail1">Organization address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter contact number"
             value={address} required onChange={(e)=>{
                setaddress(e.target.value);}}/>
            </div>
            <div class="form-group">
            <label for="exampleInputEmail1">Organization donation type</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Fund/Food" 
            value={donation_type} required onChange={(e)=>{
                setdonation_type(e.target.value);}}/>
            </div>
            <div class="form-group">
            <label for="exampleInputEmail1">Organization Member Count</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter count of members" 
            value={d_qty} required onChange={(e)=>{
                setd_qty(e.target.value);}}/>
            </div>
            <div class="form-group">
            <label for="exampleInputEmail1">Organization location</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Malabe" 
            value={location} required onChange={(e)=>{
                setlocation(e.target.value);}}/>
            </div>
            <button type="submit" class="btn btn-primary" onClick={saveOrganization}>Submit</button>
           </div>
            </div>
                 
              </main>
              
        
        </div>
    );
}