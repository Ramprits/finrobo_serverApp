const express = require("express");
const _ = require("lodash");
const Loan = require("../models/loan.model");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const loan = await Loan.find();
    res.status(200).send(loan);
  } catch (err) {
    console.log(err.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const _loan = ["name", "description", "image", "url"];
    let body = new Loan(_.pick(req.body, _loan));
    loan = await body.save();
    res.status(201).send(_loan);
  } catch (err) {
    res.status(400).send("Unable to save loan");
  }
});

module.exports = router;
