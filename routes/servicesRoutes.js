const express = require("express");
const router = express.Router()

router.route("/").get((req, res)=>{
    
    res.status(200).json({message: "Get all services"})
});

router.route("/").post((req, res)=>{

    // how to get the data
    res.status(200).json({message: "Create Services"})
});

router.route("/details").get((req, res)=>{
    res.status(200).json({message: "GET for details"})
});

router.route("/details").post((req, res)=>{
    res.status(200).json({message: "POST for details"})
});

module.exports = router