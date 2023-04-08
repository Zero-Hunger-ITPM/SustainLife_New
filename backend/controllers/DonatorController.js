const Donator = require("../models/DonatorModel");

const addDonator = (req, res) => {
  const {
  first_name,
  last_name,
  address, 
  phone_no,
  donation_type,
  d_qty
     
  } = req.body;

  console.log(req.body);

  const newDonator = new Donator({
  first_name,
  last_name,
  address, 
  phone_no,
  donation_type,
  d_qty, 
  });

  newDonator
    .save()
    .then((createdDonator) => {
      res.status(200).json(createdDonator);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getDonator = async (req, res) => {
  try {
    const donator = await Donator.find();

    res.status(200).json(donator);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getsingleDonator = async (req, res) => {
  try {
    const id = req.params.id;
    const donator = await Donator.findById(id);
    res.status(200).json(donator);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateDonator = async (req, res) => {
  const donatorId = req.params.id;

  try {
    const donator = await Donator.findById(donatorId);

    if(!donator){
      return res.status(404).json("There is a no Donators");
    }

    const { first_name, last_name, address, phone_no, donation_type, d_qty} = req.body;
    
    const donato = await Donator.findByIdAndUpdate(donatorId, {first_name, last_name, address, phone_no, donation_type, d_qty});

    res.status(201).json({
      "Updated": true
    })

  } catch (error) { 
    res.status(400).json(error.message);
  }
}

const removeDonator = async (req, res) => {
  const donatorId = req.params.id;

  try {
    const donator = await Donator.findById(donatorId);

    if(!donator){
      return res.status(404).json("There is a no Donator");
    }

    const removeDonator = await Donator.findByIdAndDelete(donatorId);
    res.status(200).json(removeDonator);
    
  } catch (error) { 
    res.status(400).json(error.message);
  }
}

module.exports = {
  addDonator,
  getDonator,
  getsingleDonator,
  updateDonator,
  removeDonator,
};