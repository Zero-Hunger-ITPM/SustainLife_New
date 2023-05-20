const Employee = require("../models/SelfEmployeeModel");
var bcrypt = require('bcryptjs'); 

const addEmployee= async (req, res) => {
  const {
      Name,
      image,
      addrLine1,
      addrLine2,
      addrLine3,
      city,
      telephone,
      ExchangeCategory,
      email,
      password,
      confirmpassword,

  } = req.body;

  console.log(req.body);

  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(password, salt); 
  const newEmployee = new Employee({
    Name,
    image,
    addrLine1,
    addrLine2,
    addrLine3,
    city,
    telephone,
    ExchangeCategory,
    email,
    password: hash,
    confirmpassword,
   
  });
 
  newEmployee
    .save()
    .then((createdEmployee) => {
      res.status(200).json(createdEmployee);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getEmployee = async (req, res) => {
  try {
    const employee = await Employee.find();

    res.status(200).json(employee);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getsingleemployee = async (req, res) => {
  try {
    const id = req.params.id;
    const employee = await Employee.findById(id);
    res.status(200).json(employee);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateEmployee = async (req, res) => {
  const employeeId = req.params.id;

  try {
    const employee = await Employee.findById(employeeId);

    if(!employee){
      return emp.status(404).json("There is a no Employees");
    }

    const {Name,image,addrLine1,addrLine2,addrLine3,city,telephone,ExchangeCategory,email,password,confirmpassword} = req.body;
    
    const employe = await Employee.findByIdAndUpdate(employeeId, {Name,image,addrLine1,addrLine2,addrLine3,city,telephone,ExchangeCategory,email,password,confirmpassword});

    res.status(201).json({
      "Updated": true
    })

  } catch (error) { 
    res.status(400).json(error.message);
  }
}

const removeEmployee = async (req, res) => {
  const employeeId = req.params.id;

  try {
    const employee = await Employee.findById(employeeId);

    if(!employee){
      return emp.status(404).json("There is a no Employees");
    }

    const removeEmployee = await Employee.findByIdAndDelete(employeeId);
    res.status(200).json(removeEmployee);
    
  } catch (error) { 
    res.status(400).json(error.message);
  }
}

const login = async(req, res) => {
  const EmpEmail = req.body.email;
  const EmpPAssword = req.body.password;
  console.log("EmpEmail", EmpEmail);
  console.log("EmpPAssword", EmpPAssword);

  try {
    const employee = await Employee.find({email:EmpEmail });
    console.log("employee", employee[0]);
    const isValidPassword =  bcrypt.compareSync(EmpPAssword, employee[0].password); 
   
    if(employee && isValidPassword){
      return res.status(200).json("Logged in successful!");
    }else {
      return res.status(403).json("Email or password is incorrect!");
    } 
  } catch (error) { 
    res.status(400).json(error.message);
  } 
}

module.exports = {
  addEmployee,
  getEmployee,
  getsingleemployee,
  updateEmployee,
  removeEmployee,
  login
};