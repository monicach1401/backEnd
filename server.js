const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const app = express();
const port = ({}).PORT || 5000;

app.listen(port, () => {
  console.log("Server is running on " + port);
});
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cors());