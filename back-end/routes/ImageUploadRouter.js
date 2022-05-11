const express = require("express");
const router = express.Router();
const Patient = require("../models/patient");
const { cloudinary } = require("../utils/cloudinary");

// router.get("/fetch", async (req, res) => {
//   const { resources } = await cloudinary.uploader.resource
//     .expression(" folder:YourDoctorProfilePictures")
//     .sort_by("public_id", "desc")
//     .max_results(30)
//     .execute();
//   const publicIds = resources.map((file) => file.public_id);
//   res.send(publicIds);

//   cloudinary.v2.api.resource(
//     "sample",
//     { type: "upload" },
//     function (error, result) {
//       console.log(result, error);
//     }
//   );
// });

router.post("/", async (req, res) => {
  const imageString = req.body.img;
  const uploadedResponse = await cloudinary.uploader.upload(imageString, {
    upload_preset: "YourDoctorProfilePictures",
  });
  console.log(uploadedResponse);
  try {
    res.json(uploadedResponse);
    // res.status(201).json("success");
  } catch (err) {
    //status 400 means there is a problem in the user input
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
