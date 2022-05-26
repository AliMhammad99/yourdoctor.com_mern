const express = require("express");
const router = express.Router();
const Doctor = require("../models/doctor");
const mongoose = require("mongoose");

// Routes for CRUD Operations (CRUD: Create, Read, Update, Delete)

// 1. Get based on query
router.get("/", async (req, res) => {
  try {
    const doctors = await Doctor.find(req.query);
    res.json(doctors);
  } catch (err) {
    // status 500 means an error occured on the server
    res.status(500).json({ message: err.message });
  }
});

router.get("/byBasicUserID/:id", async (req, res) => {
  try {
    const doctors = await Doctor.find({
      basic_user_id: req.params.id,
    });
    res.json(doctors);
  } catch (err) {
    // status 500 means an error occured on the server
    res.status(500).json({ message: err.message });
  }
});

// 2. Get one by id
router.get("/:id", getDoctorById, async (req, res) => {
  res.send(res.doctor);
});

// 3. Create one
router.post("/", async (req, res) => {
  const doctor = new Doctor({
    basic_user_id: req.body.basic_user_id,
    years_of_experience: req.body.years_of_experience,
    spoken_languages: req.body.spoken_languages,
    professional_biography: req.body.professional_biography,
    specialty_id: req.body.specialty_id,
    certificate: req.body.certificate,
    clinic: req.body.clinic,
  });
  try {
    const newDoctor = await doctor.save();
    //status 201 means everything was successful
    /*default for successful is 200,
        but 201 is used for successful create operations specifically
        */
    res.status(201).json(newDoctor);
  } catch (err) {
    //status 400 means there is a problem in the user input
    res.status(400).json({ message: err.message });
  }
});

//Aggregation with basic_user
router.get("/aggregate/basic_user", async (req, res) => {
  try {
    var doctorNameRegex = new RegExp(req.query.doctor_name, "i");
    await Doctor.aggregate([
      {
        $lookup: {
          from: "basic_user",
          localField: "basic_user_id",
          foreignField: "_id",
          as: "basic_user_details",
          pipeline: [
            {
              $addFields: {
                full_name: {
                  $concat: ["$first_name", " ", "$last_name"],
                },
              },
            },
            {
              $match: {
                full_name: {
                  $regex: doctorNameRegex,
                },
              },
            },
          ],
        },
      },
      { $unwind: "$basic_user_details" },
    ]).exec(function (err, results) {
      res.json(results);
    });
  } catch (err) {
    // status 500 means an error occured on the server
    res.status(500).json({ message: err.message });
  }
});

//Get doctor card by specialty id
router.get("/get/doctor_card", async (req, res) => {
  //"" means get all doctors
  if (req.query.specialty_id == "") {
    try {
      const doctors = await Doctor.aggregate([
        {
          $lookup: {
            from: "basic_user",
            localField: "basic_user_id",
            foreignField: "_id",
            as: "basic_user_details",
          },
        },
        {
          $lookup: {
            from: "specialty",
            localField: "specialty_id",
            foreignField: "_id",
            as: "specialty",
          },
        },
        { $unwind: "$basic_user_details" },
        { $unwind: "$specialty" },
      ]);
      res.json(doctors);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  } else {
    //get doctors having the specialty_id
    try {
      const doctors = await Doctor.aggregate([
        {
          $match: {
            specialty_id: mongoose.Types.ObjectId(req.query.specialty_id),
          },
        },
        {
          $lookup: {
            from: "basic_user",
            localField: "basic_user_id",
            foreignField: "_id",
            as: "basic_user_details",
          },
        },
        {
          $lookup: {
            from: "specialty",
            localField: "specialty_id",
            foreignField: "_id",
            as: "specialty",
          },
        },
        { $unwind: "$basic_user_details" },
        { $unwind: "$specialty" },
      ]);
      // .match({specialty_id: mongoose.Types.ObjectId(req.query.specialty_id)});
      res.json(doctors);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
});

//Get Doctor Details by basic_user_id
router.get("/get/doctor_details/:id", async (req, res) => {
  //get doctors having the specialty_id
  try {
    const doctorDetails = await Doctor.aggregate([
      {
        $match: {
          basic_user_id: mongoose.Types.ObjectId(req.params.id),
        },
      },
      {
        $lookup: {
          from: "basic_user",
          localField: "basic_user_id",
          foreignField: "_id",
          as: "basic_user_details",
        },
      },
      {
        $lookup: {
          from: "specialty",
          localField: "specialty_id",
          foreignField: "_id",
          as: "specialty",
        },
      },
      {
        $lookup: {
          from: "available_date",
          localField: "basic_user_id",
          foreignField: "doctor_user_id",
          as: "available_dates",
          pipeline: [
            {
              $match: {
                is_booked: false,
              },
            },
          ],
        },
      },
      { $unwind: "$basic_user_details" },
      { $unwind: "$specialty" },
    ]);
    // .match({specialty_id: mongoose.Types.ObjectId(req.query.specialty_id)});
    res.json(doctorDetails);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// 4. update one
// router.patch("/:id", getDoctorById, async (req, res) => {
//   if (req.body.specialty_name != null) {
//     res.specialty.specialty_name = req.body.specialty_name;
//   }
//   // Same if block for other fields if there is more than one field
//   try {
//     const updatedSpecialty = await res.specialty.save();
//     res.json(updatedSpecialty);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // 5. Delete one
// router.delete("/:id", getDoctorById, async (req, res) => {
//   try {
//     await res.specialty.remove();
//     res.json({ message: "Specialty Deleted Successfully" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

async function getDoctorById(req, res, next) {
  /* This function is used to check if a specialty exists with the given id*/
  /* This function is needed a lot in our operations above,
     that's why we created this function (reduce code redundancy)*/
  /* This function can be called on all operations that uses an id as req.params*/
  let doctor;
  try {
    doctor = await Doctor.findById(req.params.id);
    // If does not exist we return error message
    if (doctor == null) {
      /*status 404 means we are not able to find an object 
        with the passed id in the database*/
      return res.status(404).json({ message: "Cannot find doctor" });
    }
  } catch (err) {
    // Server error
    return res.status(500).json({ message: err.message });
  }
  // If this statement is reached => it exists, set it to result
  res.doctor = doctor;
  /* Move to the next function of middleware 
  (the function next to the call of this function inside parameters of CRUD)
  */
  next();
}

module.exports = router;
