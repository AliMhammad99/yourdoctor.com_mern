const express = require("express");
const router = express.Router();
const AvailableDate = require("../models/available_date");

// Routes for CRUD Operations (CRUD: Create, Read, Update, Delete)

router.get("/getSpecificDate/:id", async (req, res) => {
  let availableDate;
  // console.log(req.params.id);
  try {
    availableDate = await AvailableDate.findById(req.params.id);
    // If does not exist we return error message
    if (availableDate == null) {
      /*status 404 means we are not able to find an object 
        with the passed id in the database*/
      return res.status(404).json({ message: "Cannot find available dates" });
    }
    return res.send(availableDate);
  } catch (err) {
    // Server error
    return res.status(500).json({ message: err.message });
  }
});

// 2. Get one BasicUser by id
// router.get("/:id", getAppointmentById, async (req, res) => {
//   res.send(res.appointment);
// });

// 3. Create one BasicUser
router.post("/", async (req, res) => {
  const availableDate = new AvailableDate({
    doctor_user_id: req.body.doctor_user_id,
    from: req.body.from,
    to: req.body.to,
  });
  try {
    const newAvailableDate = await availableDate.save();
    //status 201 means everything was successful
    /*default for successful is 200,
        but 201 is used for successful create operations specifically
        */
    res.status(201).json(newAvailableDate);
  } catch (err) {
    //status 400 means there is a problem in the user input
    res.status(400).json({ message: err.message });
  }
});

//Update available date is_booked to true
router.patch("/set_booked/:id", getAvailableDateById, async (req, res) => {
  try {
    res.availableDate.is_booked = true;
    const availableDate = await res.availableDate.save();
    res.json(availableDate);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 4. update one BasicUser
// router.patch("/:id", getAppointmentById, async (req, res) => {
//   if (req.body.patient_user_id != null) {
//     res.appointment.patient_user_id = req.body.patient_user_id;
//   }
//   if (req.body.available_date_id != null) {
//     res.appointment.available_date_id = req.body.available_date_id;
//   }
//   // Same if block for other fields if there is more than one field
//   try {
//     const appointment = await res.appointment.save();
//     res.json(appointment);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// 2. Get one BasicUser by id
// router.get("/infos/accountId", getBasicUserBySessionId, async (req, res) => {
//   res.send(res.basicUser);
// });

// router.patch(
//   "/profilePicture/add",
//   getBasicUserBySessionId,
//   async (req, res) => {
//     if (req.body.profile_picture != null) {
//       res.basicUser.profile_picture = req.body.profile_picture;
//       console.log(res.basicUser.profile_picture);
//       console.log(req.body.profile_picture);
//       console.log(req.session.accountId);
//     }
//     // Same if block for other fields if there is more than one field
//     try {
//       const basicUser = await res.basicUser.save();
//       res.json(basicUser);
//     } catch (err) {
//       res.status(400).json({ message: err.message });
//     }
//   }
// );

// 5. Delete one BasicUser
router.delete("/:id", getAvailableDateById, async (req, res) => {
  try {
    await res.availableDate.remove();
    res.json({ message: "Basic User Deleted Successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// async function getBasicUserBySessionId(req, res, next) {
//   /* This function is used to check if a basicUser exists with the given id*/
//   /* This function is needed a lot in our operations above,
//      that's why we created this function (reduce code redundancy)*/
//   /* This function can be called on all operations that uses an id as req.params*/
//   let basicUser;
//   try {
//     basicUser = await BasicUser.findOne({ accountId: req.session.accountId });
//     // If does not exist we return error message

//     if (basicUser == null) {
//       /*status 404 means we are not able to find an object
//         with the passed id in the database*/
//       return res.status(404).json({ message: "Cannot find specialty" });
//     }
//   } catch (err) {
//     // Server error
//     return res.status(500).json({ message: err.message });
//   }
//   // If this statement is reached => it exists, set it to result
//   res.basicUser = basicUser;
//   /* Move to the next function of middleware
//   (the function next to the call of this function inside parameters of CRUD)
//   */
//   next();
// }

async function getAvailableDateById(req, res, next) {
  /* This function is used to check if a basicUser exists with the given id*/
  /* This function is needed a lot in our operations above,
     that's why we created this function (reduce code redundancy)*/
  /* This function can be called on all operations that uses an id as req.params*/
  let availableDate;
  try {
    availableDate = await AvailableDate.findById(req.params.id);
    // If does not exist we return error message
    if (availableDate == null) {
      /*status 404 means we are not able to find an object 
        with the passed id in the database*/
      return res.status(404).json({ message: "Cannot find specialty" });
    }
  } catch (err) {
    // Server error
    return res.status(500).json({ message: err.message });
  }
  // If this statement is reached => it exists, set it to result
  res.availableDate = availableDate;
  /* Move to the next function of middleware 
  (the function next to the call of this function inside parameters of CRUD)
  */
  next();
}

module.exports = router;
