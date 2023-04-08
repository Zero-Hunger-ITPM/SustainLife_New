const express = require("express");
const dotenv = require("dotenv");
const router = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");
let ExchangeItem = require("../models/ExchangeItemModel");



//post method 

router.post('/add', (req,res)=>{
  let newExchangeItem = new ExchangeItem(req.body);
  newExchangeItem.save((err)=>{
      if(err){
          return res.status(400).json({
              error:err
          });
      }
      return res.status(200).json({
          success:"new ExchangeItem saved sucessfully"
      });
  });
})


//get method to retriew data

router.get('/get', (req,res)=>{
    ExchangeItem.find().exec((err,ExchangeItem)=>{
        console.log(ExchangeItem)
       if(err){
           return res.status(400).json({
               error:err
           });
       }return res.status(200).json({
           success:"true",
           Device
       });
    });
   
   });
  
  
  //GET ONE Device By ID (http://localhost:8080/ExchangeItem/<userID>)
  
  router.route("/get/:id").get(async(req,res) => { // get data from frontend via request. async function is used to increase the performance 
      let userId =  req.params.id; //fetch the id parameter in url
  
      const ExchangeItem = await ExchangeItem.findById(userId) //pass two parameters(userid,object that store seller data) and find user by id and update relevent data
      .then((ExchangeItem) => {
          res.status(200).send({status : "Item data fetched", Device}) //if find success, display success message
      }).catch((err) => {
          console.log(err);
          res.status(500).send({status: "Error with find data"}); //if not display error message
      })
  
  })
  




module.exports = controller;

