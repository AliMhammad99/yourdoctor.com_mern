const express = require("express");
const router = express.Router();
const Specialty = require("../models/specialty");

// Routes for CRUD Operations (CRUD: Create, Read, Update, Delete)

// 1. Gett specialty based on query
router.get("/", async (req, res) => {
  try {
    const specialties = await Specialty.find(req.query);
    res.json(specialties);
  } catch (err) {
    // status 500 means an error occured on the server
    res.status(500).json({ message: err.message });
  }
});

// 2. Get one specialty by id
router.get("/:id", getSpecialtyById, async (req, res) => {
  res.send(res.specialty);
});

// 3. Create one specialty
router.post("/", async (req, res) => {
  const specialty = new Specialty({
    specialty_name: req.body.specialty_name,
  });
  try {
    const newSpecialty = await specialty.save();
    //status 201 means everything was successful
    /*default for successful is 200,
        but 201 is used for successful create operations specifically
        */
    res.status(201).json(newSpecialty);
  } catch (err) {
    //status 400 means there is a problem in the user input
    res.status(400).json({ message: err.message });
  }
});

// 4. update one specialty
router.patch("/:id", getSpecialtyById, async (req, res) => {
  if (req.body.specialty_name != null) {
    res.specialty.specialty_name = req.body.specialty_name;
  }
  // Same if block for other fields if there is more than one field
  try {
    const updatedSpecialty = await res.specialty.save();
    res.json(updatedSpecialty);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 5. Delete one specialty
router.delete("/:id", getSpecialtyById, async (req, res) => {
  try {
    await res.specialty.remove();
    res.json({ message: "Specialty Deleted Successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getSpecialtyById(req, res, next) {
  /* This function is used to check if a specialty exists with the given id*/
  /* This function is needed a lot in our operations above,
     that's why we created this function (reduce code redundancy)*/
  /* This function can be called on all operations that uses an id as req.params*/
  let specialty;
  try {
    specialty = await Specialty.findById(req.params.id);
    // If does not exist we return error message
    if (specialty == null) {
      /*status 404 means we are not able to find an object 
        with the passed id in the database*/
      return res.status(404).json({ message: "Cannot find specialty" });
    }
  } catch (err) {
    // Server error
    return res.status(500).json({ message: err.message });
  }
  // If this statement is reached => it exists, set it to result
  res.specialty = specialty;
  /* Move to the next function of middleware 
  (the function next to the call of this function inside parameters of CRUD)
  */
  next();
}

module.exports = router;
