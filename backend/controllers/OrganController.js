const Organ = require("../models/OrganModel");

const addOrgan = (req, res) => {
  const {
  name,
  organization_name, 
  o_phone_no,
  o_donation_type,
  o_qty, 
  location
     
  } = req.body;

  console.log(req.body);

  const newOrgan = new Organ({
  name,
  organization_name, 
  o_phone_no,
  o_donation_type,
  o_qty, 
  location
  });

  newOrgan
    .save()
    .then((createdOrgan) => {
      res.status(200).json(createdOrgan);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getOrgan = async (req, res) => {
  try {
    const organ = await Organ.find();

    res.status(200).json(organ);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getsingleOrgan = async (req, res) => {
  try {
    const id = req.params.id;
    const organ = await Organ.findById(id);
    res.status(200).json(organ);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateOrgan = async (req, res) => {
  const organId = req.params.id;
  console.log(organId);
  try {
    const organ = await Organ.findById(organId);

    if(!organ){
      return res.status(404).json("There is a no organizations");
    }

    const { name, organization_name, o_phone_no, o_donation_type, o_qty, location} = req.body;
    
    const organi = await Organ.findByIdAndUpdate(organId, {name, organization_name, o_phone_no, o_donation_type, o_qty, location});

    res.status(201).json({
      "Updated": true
    })

  } catch (error) { 
    res.status(400).json(error.message);
  }
}

const removeOrgan = async (req, res) => {
  const organId = req.params.id;

  try {
    const organ = await Organ.findById(organId);

    if(!organ){
      return res.status(404).json("There is a no Organizations");
    }

    const removeOrgan = await Organ.findByIdAndDelete(organId);
    res.status(200).json(removeOrgan);
    
  } catch (error) { 
    res.status(400).json(error.message);
  }
}

module.exports = {
  addOrgan,
  getOrgan,
  getsingleOrgan,
  updateOrgan,
  removeOrgan,
};