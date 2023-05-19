import React, {useState} from "react";
import "./Restaurant.css";
import axios from "axios";


export default function Payment(){
  
  return(
    <div  className="content"> 
    <h2>Payment Details</h2>
            
            <hr></hr>
            <div className="ui main">
                   
            <form className="ui form">
                      <div className="field">
                        <label>Store Id</label>
                        <input className="input"
                          type="text"
                          placeholder="ex:st01"
                          />
                      </div>
                     

                      <div className="field">
                        <label>Package Id</label>
                        <input className="input"
                          type="text"
                          placeholder="Pc01"/>  
                      </div>
                      

                      <div className="field">
                        <label>Delivery District</label>
                        <input className="input"
                          type="text"
                          placeholder="Delivery District"
                           />
                        
                      </div>
                      <div className="field">
                        <label>Weight</label>
                        <input className="input"
                          type="text"
                          name="weight"
                          placeholder="Weight"
                        />
                      </div>
                      

                      <div className="field">
                        <label>Date</label>
                        <input className="input"
                          type="text"
                          placeholder="Date"
                      /> 
                      </div>

                      <button className="ui button yellow">Add</button>
                    </form>
                  </div>
                <div>
               
                </div>
                </div>


    );
}