const express = require('express')
const app = express()
const port = 80

app.post('/', (req, res) => {
  console.log('request recived');

  // Booked, Allocated, Processed, Delivery, Verified,  Querie, Hold, Cancelled, Ended
  var result = {
    "ConsRef": "1234",
    "TripStatus" : "Ended",
    "JobNo" : "1234",
    "OrderFound" : true,
    "Url" : "www.google.com",
    "CustomerRef": "CUS1234"
  };

  console.log('response sent');
  res.json(result);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})