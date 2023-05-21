import React, {useEffect,useState} from "react";
import "./donation.css";
import axios from "axios";
import swal from "sweetalert2";
import Header from '../../components/header'
import bg from "../../images/orga.png"

export default function Organization(){
    const [organization, setOrganization] = useState([]);
    const [name, setname] = useState("");
    const [organization_name, setorganization_name] = useState("");
    const [o_phone_no, seto_phone_no] = useState("");
    const [o_donation_type, setdonation_type] = useState("");
    const [o_qty, setd_qty] = useState("");
    const [location, setlocation] = useState("");
    const [OrganizationSearch , setSearch] = useState("");
    const [errors, setErrors] = useState([]);

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
        let hasErrors = false;

        const nameModel = /^[a-zA-Z]+$/
        var quantities =/^\+?1?\s*?\(?\d{3}(?:\)|[-|\s])?\s*?\d{3}[-|\s]?\d{4}$/

        if (name.length <= 0 && !nameModel.test(name)) {
          hasErrors = true;
          setErrors((prev) => [...prev, "nameError"]);
        } 

        if (organization_name.length <= 0 && !nameModel.test(organization_name)) {
          hasErrors = true;
          setErrors((prev) => [...prev, "nameError"]);
        } 
        
      if(!quantities.test(o_phone_no)){
        hasErrors=true;
        setErrors((prev) => [...prev, "QuantityError"]);
       }


        const organization = {
            name,
            organization_name,
            o_phone_no,
            o_donation_type,
            o_qty,
            location,

        };
        if (
          organization.name.length <= 0 ||
            organization.organization_name.length <= 0 ||
            organization.o_phone_no.length <= 0 ||
            organization.o_donation_type.length <= 0 ||
            organization.o_qty.length <= 0 ||
            organization.location <= 0
         
        ) {
          //setErrors(true);
          return;
        }
        axios.post("http://localhost:8000/api/AddOrgan",organization).then(()=>{
          swal.fire({
            title: "Organization Added Successfully !!.",
            icon: "success",
            confirmButtonText: "OK",
              }).then(function () {
                  // Redirect the user
                  window.location.href = "";
                });
        }).catch((err)=>{
          alert(err)
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
            <label for="exampleInputEmail1">Submitter's name</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name"
            value={name} required onChange={(e)=>{
                setname(e.target.value);}}/>
                      {errors.includes("nameError") && (
          <p class="alert-txt">Name is Required </p>
        )}
            </div>
            <div class="form-group">
            <label for="exampleInputEmail1">Organization name</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name"
            value={organization_name} required onChange={(e)=>{
                setorganization_name(e.target.value);}}/>
                   {errors.includes("nameError") && (
          <p class="alert-txt">Name is Required </p>
        )}
            </div>
            <div class="form-group">
            <label for="exampleInputEmail1">Organization contact number</label>
            <input type="number" class="form-control"  aria-describedby="emailHelp" placeholder="Enter phone "
            value={o_phone_no} required onChange={(e)=>{
                seto_phone_no(e.target.value);}}/>
                        {errors.includes("QuantityError") && (
          <p class="alert-txt">Please Enter Valid Phone No</p>
        )}
            </div>
            <div class="form-group">
            <label for="exampleInputEmail1">Organization donation type</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Fund/Food" 
            value={o_donation_type} required onChange={(e)=>{
                setdonation_type(e.target.value);}}/>
                       {errors.includes("nameError") && (
          <p class="alert-txt">Donation Type is Required </p>
        )}
            </div>
            <div class="form-group">
            <label for="exampleInputEmail1">Organization Member Count</label>
            <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter count of members" 
            value={o_qty} required onChange={(e)=>{
                setd_qty(e.target.value);}}/>
            </div>
            <div class="form-group">
            <label for="exampleInputEmail1">Organization location</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Malabe" 
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