const express = require("express");
const router = express.Router();
const Appointment = require("../models/appointment.js");
const BasicUser = require("../models/basic_user");
const basicUser = require("./basicUser");
// Routes for CRUD Operations (CRUD: Create, Read, Update, Delete)

router.get("/patientID/:id", async (req, res) => {
  let appointment;
  try {
    appointment = await Appointment.find({
      patient_user_id: req.params.id,
    });
    // If does not exist we return error message
    if (appointment == null) {
      /*status 404 means we are not able to find an object 
        with the passed id in the database*/
      return res.status(404).json({ message: "Cannot find appointment" });
    }
    return res.send(appointment);
  } catch (err) {
    // Server error
    return res.status(500).json({ message: err.message });
  }
});

// 2. Get one BasicUser by id
router.get("/:id", getAppointmentById, async (req, res) => {
  res.send(res.appointment);
});

// 3. Create one BasicUser
router.post("/", async (req, res) => {
  const appointment = new Appointment({
    patient_user_id: req.body.patient_user_id,
    available_date_id: req.body.available_date_id,
  });
  try {
    const newAppointment = await appointment.save();
    //status 201 means everything was successful
    /*default for successful is 200,
        but 201 is used for successful create operations specifically
        */
    res.status(201).json(newAppointment);
  } catch (err) {
    //status 400 means there is a problem in the user input
    res.status(400).json({ message: err.message });
  }
});

// 4. update one BasicUser
router.patch("/:id", getAppointmentById, async (req, res) => {
  if (req.body.patient_user_id != null) {
    res.appointment.patient_user_id = req.body.patient_user_id;
  }
  if (req.body.available_date_id != null) {
    res.appointment.available_date_id = req.body.available_date_id;
  }
  // Same if block for other fields if there is more than one field
  try {
    const appointment = await res.appointment.save();
    res.json(appointment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 2. Get one BasicUser by id
router.get("/infos/accountId", getBasicUserBySessionId, async (req, res) => {
  res.send(res.basicUser);
});

router.patch(
  "/profilePicture/add",
  getBasicUserBySessionId,
  async (req, res) => {
    if (req.body.profile_picture != null) {
      res.basicUser.profile_picture = req.body.profile_picture;
      console.log(res.basicUser.profile_picture);
      console.log(req.body.profile_picture);
      console.log(req.session.accountId);
    }
    // Same if block for other fields if there is more than one field
    try {
      const basicUser = await res.basicUser.save();
      res.json(basicUser);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
);

// 5. Delete one BasicUser
router.delete("/:id", getAppointmentById, async (req, res) => {
  try {
    await res.appointment.remove();
    res.json({ message: "Basic User Deleted Successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Book appointment by available date for session basic_user_id
router.post("/book/appointment/", getBasicUserBySessionId, async (req, res) => {
  // console.log(req.body);
  // console.log(res.basicUser._id);
  const appointment = new Appointment({
    patient_user_id: res.basicUser._id,
    available_date_id: req.body.available_date_id,
  });
  try {
    const newAppointment = await appointment.save();
    //status 201 means everything was successful
    /*default for successful is 200,
        but 201 is used for successful create operations specifically
        */
    res.status(201).json(newAppointment);
  } catch (err) {
    //status 400 means there is a problem in the user input
    res.status(400).json({ message: err.message });
  }
});

async function getBasicUserBySessionId(req, res, next) {
  /* This function is used to check if a basicUser exists with the given id*/
  /* This function is needed a lot in our operations above,
     that's why we created this function (reduce code redundancy)*/
  /* This function can be called on all operations that uses an id as req.params*/
  let basicUser;
  try {
    basicUser = await BasicUser.findOne({ accountId: req.session.accountId });
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

async function getAppointmentById(req, res, next) {
  /* This function is used to check if a basicUser exists with the given id*/
  /* This function is needed a lot in our operations above,
     that's why we created this function (reduce code redundancy)*/
  /* This function can be called on all operations that uses an id as req.params*/
  let appointment;
  try {
    appointment = await Appointment.findById(req.params.id);
    // If does not exist we return error message
    if (appointment == null) {
      /*status 404 means we are not able to find an object 
        with the passed id in the database*/
      return res.status(404).json({ message: "Cannot find specialty" });
    }
  } catch (err) {
    // Server error
    return res.status(500).json({ message: err.message });
  }
  // If this statement is reached => it exists, set it to result
  res.appointment = appointment;
  /* Move to the next function of middleware 
  (the function next to the call of this function inside parameters of CRUD)
  */
  next();
}

async function getBasicUserBySessionId(req, res, next) {
  /* This function is used to check if a basicUser exists with the given id*/
  /* This function is needed a lot in our operations above,
     that's why we created this function (reduce code redundancy)*/
  /* This function can be called on all operations that uses an id as req.params*/
  let basicUser;
  try {
    basicUser = await BasicUser.findOne({ accountId: req.session.accountId });
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
