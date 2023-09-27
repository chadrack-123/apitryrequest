const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;


app.use(bodyParser.urlencoded({ extended: false }));
// Use body-parser middleware to parse JSON data
app.use(bodyParser.json());

// Define your webhook endpoint
// app.post('/webhook-endpoint', (req, res) => {
//   // Handle the incoming data from the webhook here
//   const payload = req.body;
//   console.log('Received webhook data:', payload);

//   // Respond to the webhook request
//   res.status(200).json({ message: 'Webhook data received successfully' });
// });

app.use("/api/services", require("./routes/servicesRoutes"))


// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);

  console.log("To comfirm that is running")
});
