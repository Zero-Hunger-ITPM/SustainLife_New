import React, {useEffect,useState} from "react";
import "./donation.css";
import "./tabel.css";
import axios from 'axios';
import swal from "sweetalert2";
import Header from '../../components/header'
import bg from "../../images/donatehome.png"

export default function Donation(){
    const [donation, setDonations] = useState([]);
    const [organization, setOrganization] = useState([]);
    const [first_name, setfirst_name] = useState("");
    const [last_name, setlast_name] = useState("");
    const [address, setaddress] = useState("");
    const [phone_no, setphone_no] = useState("");
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

    function saveDonation(e){
        e.preventDefault();
        alert("Going to add New Donation");
      
        const donate = {
            first_name,
            last_name,
            address,
            phone_no,
            donation_type,
            d_qty
        };
        if (
            donate.first_name.length <= 0 ||
            donate.last_name.length <= 0 ||
            donate.address.length <= 0 ||
            donate.phone_no.length <= 0 ||
            donate.donation_type.length <= 0 ||
            donate.d_qty.length <= 0 
         
        ) {
          //setErrors(true);
          return;
        }
        axios.post("http://localhost:8000/api/AddDonator",donate).then(()=>{
        }).catch((err)=>{
          alert(err)
        });
        swal.fire({
          title: "Donate Added Successfully !!.",
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
      {/* <!--=============== Donate ===============--> */}
      <main className="main">
          <div className='home__container Home-container grid'>
                <defs>
                <h1 className='title'>Make Donations</h1>
                <h2 className='home_description'>Donation need organizations can join with us</h2>
                <div className="contact__content">
                                <a href="/Organization" className="button">Organization join</a>
                                <a><img  className="Home-bg" src={bg} alt="bg"/></a>
                            </div>
                            <clipPath id="clip0">
                <rect width="312" height="236" top="20%" fill="white"/>
                </clipPath>
                </defs>
                <div class="content">
                <h2>Donation Details</h2>
            <hr></hr>
            <div class="form-group">
            <label for="exampleInputEmail1">Donater first name</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" 
            value={first_name} required onChange={(e)=>{
                setfirst_name(e.target.value);}}/>
            </div>
            <div class="form-group">
            <label for="exampleInputEmail1">Donater last name</label>
            <input type="email" class="form-control"  aria-describedby="emailHelp" placeholder="Enter email" 
            value={last_name} required onChange={(e)=>{
                setlast_name(e.target.value);}}/>
            </div>
            <div class="form-group">
            <label for="exampleInputEmail1">Donation location</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter location"
            value={address} required onChange={(e)=>{
                setaddress(e.target.value);}}/>
            </div>
            <div class="form-group">
            <label for="exampleInputEmail1">Donater contact number</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter contact number"
            value={phone_no} required onChange={(e)=>{
                setphone_no(e.target.value);}}/> 
            </div>
            <div class="form-group">
            <label for="exampleInputEmail1">Donation type</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Food/Fund"
            value={donation_type} required onChange={(e)=>{
                setdonation_type(e.target.value);}}/>
            </div>
            <div class="form-group">
            <label for="exampleInputEmail1">Donation quantity</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter qty"
             value={d_qty} required onChange={(e)=>{
                setd_qty(e.target.value);}}/>
            </div>
            
           <div></div>
            <button type="submit" class="btn btn-primary" onClick={saveDonation}>Submit</button>
           </div>
              </div>  
              </main>
        <div className="card shodow mb-4">        
        <div className="card-body">
            {/* search  */}
            <div class="input-group">
             <div class="form-outline">
                <input type="search" name="search" id="form1" class="form-control" 
                 placeholder="search" onChange ={(e)=>{setSearch(e.target.value);}}
                 />
                </div>
                <button type="button" className="ui button yellow">search</button>
               </div>
            <hr></hr>
            <div className="table-responsive">
                <h2>Organizations To Donate</h2>
            <div>
             <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                    <thead>
                                        <tr>
                                            <th scope="col">Organization name</th>
                                            <th scope="col">Organization contact no</th>
                                            <th scope="col">Organization address</th>
                                            <th scope="col">Organization donation need type</th>
                                            <th scope="col">Organization member count</th> 
                                            <th scope="col">Organization location</th>  
                                              
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {organization && organization.filter(value=>{
                                        if(OrganizationSearch ===""){
                                            return value;
                                        }else if(
                                            value.organization_location.toLowerCase().includes(OrganizationSearch.toLowerCase())){
                                                return value
                                            }
                                        }).map((organization, i) => (
                                              <><tr>
                                                <td>{organization.organization_name}</td>
                                                <td>{organization.o_phone_no}</td>
                                                <td>{organization.address}</td>
                                                <td>{organization.o_donation_type}</td>
                                                <td>{organization.d_qty}</td> 
                                                <td>{organization.location}</td>    
                                             
                                                </tr></>
                                        ))}
                                        
                                    </tbody>
                                </table> 
                    </div>  
            </div>
        </div>
        </div>
        </div>
    );
}