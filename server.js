const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const db = require('./keys').mongoURI; 
const citiesRouter = require('./routes/cities');


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
// Realizamos una llamada a app.use, pasando dos argumentos: 
//la ruta de la API y la ruta relativa al archivo donde definiremos nuestros métodos de ruta.
app.use('/cities',citiesRouter)


/*segun plataforma 
mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log('Connection to Mongo DB established'))
  .catch(err => console.log(err));*/
  
  mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connection to MongoDB established'))
  .catch(err => console.log(err));