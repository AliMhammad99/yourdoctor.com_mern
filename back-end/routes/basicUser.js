const express = require("express");
const router = express.Router();
const BasicUser = require("../models/basic_user.js");

// Routes for CRUD Operations (CRUD: Create, Read, Update, Delete)

// 1. Get BasicUser based on query
router.get("/", async (req, res) => {
  try {
    const basicUsers = await BasicUser.find(req.query);
    res.json(basicUsers);
  } catch (err) {
    // status 500 means an error occured on the server
    res.status(500).json({ message: err.message });
  }
});

// 2. Get one BasicUser by id
router.get("/:id", getBasicUserById, async (req, res) => {
  res.send(res.basicUser);
});

// 3. Create one BasicUser
router.post("/", async (req, res) => {
  const basicUser = new BasicUser({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    gender: req.body.gender,
    date_of_birth: Date.parse(req.body.date_of_birth),
    phone_number: parseInt(req.body.phone_number.replace(/ /g, "")),
    //profile_picture: req.body.profile_picture,
  });
  try {
    const newBasicUser = await basicUser.save();
    //status 201 means everything was successful
    /*default for successful is 200,
        but 201 is used for successful create operations specifically
        */
    res.status(201).json(newBasicUser);
  } catch (err) {
    //status 400 means there is a problem in the user input
    res.status(400).json({ message: err.message });
  }
});

// 4. update one BasicUser
router.patch("/:id", getBasicUserById, async (req, res) => {
  if (req.body.first_name != null) {
    res.basicUser.first_name = req.body.first_name;
  }
  if (req.body.last_name != null) {
    res.basicUser.last_name = req.body.last_name;
  }
  if (req.body.gender != null) {
    res.basicUser.gender = req.body.gender;
  }
  if (req.body.date_of_birth != null) {
    res.basicUser.date_of_birth = req.body.date_of_birth;
  }
  if (req.body.phone_number != null) {
    res.basicUser.phone_number = req.body.phone_number;
  }
  if (req.body.profile_picture != null) {
    res.basicUser.profile_picture = req.body.profile_picture;
  }
  // Same if block for other fields if there is more than one field
  try {
    const basicUser = await res.basicUser.save();
    res.json(basicUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 5. Delete one BasicUser
router.delete("/:id", getBasicUserById, async (req, res) => {
  try {
    await res.basicUser.remove();
    res.json({ message: "Basic User Deleted Successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getBasicUserById(req, res, next) {
  /* This function is used to check if a basicUser exists with the given id*/
  /* This function is needed a lot in our operations above,
     that's why we created this function (reduce code redundancy)*/
  /* This function can be called on all operations that uses an id as req.params*/
  let basicUser;
  try {
    basicUser = await BasicUser.findById(req.params.id);
    // If does not exist we return error message
    if (basicUser == null) {
      /*status 404 means we are not able to find an object 
        with the passed id in the database*/
      return res.status(404).json({ message: "Cannot find specialty" });
    }
  } catch (err) {
    // Server error
    return res.status(500).json({ message: err.message });
  }
  // If this statement is reached => it exists, set it to result
  res.basicUser = basicUser;
  /* Move to the next function of middleware 
  (the function next to the call of this function inside parameters of CRUD)
  */
  next();
}

module.exports = router;
