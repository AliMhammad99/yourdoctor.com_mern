const express = require("express");
const router = express.Router();
const Account = require("../models/account.js");

// Routes for CRUD Operations (CRUD: Create, Read, Update, Delete)

// 1. Get based on query
router.get("/", async (req, res) => {
  try {
    const accounts = await Account.find(req.query);
    res.json(accounts);
  } catch (err) {
    // status 500 means an error occured on the server
    res.status(500).json({ message: err.message });
  }
});

// 2. Get one by id
router.get("/:id", getAccountById, async (req, res) => {
  res.send(res.account);
});

// 3. Create one
router.post("/", async (req, res) => {
  const account = new Account({
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    balance: parseInt(req.body.balance),
    is_activated: req.body.is_activated,
  });
  try {
    const newAccount = await account.save();
    //status 201 means everything was successful
    /*default for successful is 200,
        but 201 is used for successful create operations specifically
        */
    res.status(201).json(newAccount);
  } catch (err) {
    //status 400 means there is a problem in the user input
    res.status(400).json({ message: err.message });
  }
});

// 4. update one
router.patch("/:id", getAccountById, async (req, res) => {
  if (req.body.email != null) {
    res.account.email = req.body.email;
  }
  if (req.body.username != null) {
    res.account.username = req.body.username;
  }
  if (req.body.password != null) {
    res.account.password = req.body.password;
  }
  if (req.body.balance != null) {
    res.account.balance = req.body.balance;
  }
  if (req.body.specialty_name != null) {
    res.account.is_activated = req.body.is_activated;
  }
  // Same if block for other fields if there is more than one field
  try {
    const updatedAccount = await res.account.save();
    res.json(updatedAccount);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// // 5. Delete one
router.delete("/:id", getAccountById, async (req, res) => {
  try {
    await res.account.remove();
    res.json({ message: "Specialty Deleted Successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Login API
router.post("/authentication/login", async (req, res) => {
  const { email, password } = req.body;
  const account = await Account.findAccount(email, password);
  if (account) {
    req.session.accountId = account._id;
    console.log(req.session);
    res.json({
      authenticated: true,
      message: "You are successfully logged in.",
    });
  } else {
    res.json({ authenticated: false, message: "Incorrect email or password." });
  }
});
router.get("/authentication/is_logged_in", (req, res) => {
  if (req.session.accountId) {
    return res.json({ authenticated: true, message: "You are logged in." });
  }
  return res.json({ authenticated: false, message: "You are not logged in." });
});
router.get("/authentication/logout", (req, res) => {
  req.session.destroy();
  res.json({
    authenticated: false,
  });
});
async function getAccountById(req, res, next) {
  /* This function is used to check if a specialty exists with the given id*/
  /* This function is needed a lot in our operations above,
     that's why we created this function (reduce code redundancy)*/
  /* This function can be called on all operations that uses an id as req.params*/
  let account;
  try {
    account = await Account.findById(req.params.id);
    // If does not exist we return error message
    if (account == null) {
      /*status 404 means we are not able to find an object 
        with the passed id in the database*/
      return res.status(404).json({ message: "Cannot find doctor" });
    }
  } catch (err) {
    // Server error
    return res.status(500).json({ message: err.message });
  }
  // If this statement is reached => it exists, set it to result
  res.account = account;
  /* Move to the next function of middleware 
  (the function next to the call of this function inside parameters of CRUD)
  */
  next();
}

module.exports = router;
