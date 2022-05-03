const express = require("express");
const router = express.Router();
const Patient = require("../models/patient");

// Routes for CRUD Operations (CRUD: Create, Read, Update, Delete)

// 1. Get BasicUser based on query
router.get("/", async (req, res) => {
  try {
    const patients = await Patient.find(req.query);
    res.json(patients);
  } catch (err) {
    // status 500 means an error occured on the server
    res.status(500).json({ message: err.message });
  }
});

// 2. Get one BasicUser by id
router.get("/:id", getpatientById, async (req, res) => {
  res.send(res.patient);
});

// 3. Create one BasicUser
router.post("/", async (req, res) => {
  const patient = new Patient({
    basic_user_id: req.body.basic_user_id,
    total_spent: req.body.total_spent,
  });
  try {
    const newPatient = await patient.save();
    //status 201 means everything was successful
    /*default for successful is 200,
        but 201 is used for successful create operations specifically
        */
    res.status(201).json(newPatient);
  } catch (err) {
    //status 400 means there is a problem in the user input
    res.status(400).json({ message: err.message });
  }
});

// 4. update one patient
router.patch("/:id", getpatientById, async (req, res) => {
  if (req.body.total_spent != null) {
    res.basicUser.total_spent = req.body.total_spent;
  }
  // Same if block for other fields if there is more than one field
  try {
    const patient = await res.patient.save();
    res.json(patient);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 5. Delete one BasicUser
router.delete("/:id", getpatientById, async (req, res) => {
  try {
    await res.patient.remove();
    res.json({ message: "Basic User Deleted Successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getpatientById(req, res, next) {
  /* This function is used to check if a basicUser exists with the given id*/
  /* This function is needed a lot in our operations above,
     that's why we created this function (reduce code redundancy)*/
  /* This function can be called on all operations that uses an id as req.params*/
  let patient;
  try {
    patient = await Patient.findById(req.params.id);
    // If does not exist we return error message
    if (patient == null) {
      /*status 404 means we are not able to find an object 
        with the passed id in the database*/
      return res.status(404).json({ message: "Cannot find specialty" });
    }
  } catch (err) {
    // Server error
    return res.status(500).json({ message: err.message });
  }
  // If this statement is reached => it exists, set it to result
  res.patient = patient;
  /* Move to the next function of middleware 
  (the function next to the call of this function inside parameters of CRUD)
  */
  next();
}

module.exports = router;
