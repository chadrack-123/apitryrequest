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
     // Handle the incoming data from the webhook here
     const payload = req.body;
     console.log('Received webhook data:', payload);
   
     // Respond to the webhook request
     res.status(200).json({ message: 'Webhook data received successfully' });
});

app.post('/webhook-endpoint', (req, res) => {
    // Handle the incoming data from the webhook here
    const payload = req.body;
    console.log('Received webhook data:', payload);
  
    // Respond to the webhook request
    res.status(200).json({ message: 'Webhook data received successfully' });
  });

module.exports = router