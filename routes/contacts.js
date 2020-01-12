const express = require("express");
const router = express.Router();

//@route    GET api/contacts
//@desc     Get all user contacts
//@address  Public
router.get("/", (request, response) => {
  response.send("Get all contacts");
});

//@route    POST api/contacts
//@desc     Add new contact
//@address  Public
router.post("/", (request, response) => {
  response.send("Add contact");
});

//@route    PUT api/contacts/:id
//@desc     Update contact
//@address  Public
router.put("/:id", (request, response) => {
  response.send("Update contact");
});
module.exports = router;

//@route    DELETE api/contacts/:id
//@desc     Update contact
//@address  Public
router.delete("/:id", (request, response) => {
  response.send("delete contact");
});
module.exports = router;
