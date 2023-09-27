const express = require("express");
const router = express.Router()

router.route("/").get((req, res)=>{
    
    res.status(200).json({message: "Get all services"})
});

router.route("/").post((req, res)=>{

    // how to get the data
    res.status(200).json({message: "Create Services"})
});

router.route("/").get((req, res)=>{
    res.status(200).json({message: "hello world"})
});

router.route("/").get((req, res)=>{
    res.status(200).json({message: "hello world"})
});

module.exports = router