const mongoose = require('mongoose');

const schema = mongoose.Schema;

const EmployeeSchema = new schema({

    _id: {
        type: mongoose.Types.ObjectId,
        auto: true
      },
      image: String,
      Name: String,
      addrLine1: String,
      addrLine2: String,
      addrLine3: String,
      city: String,
      telephone: String,
      ExchangeCategory: String,
      email: String,
      password: String,
      confirmpassword: String

})

const Employee = mongoose.model("Employee",EmployeeSchema)

module.exports = Employee;