
const express = require("express");

const app = express();

const cors = require("cors");

const puerto = 2004;

//-----------

app.use(cors());




//-----------
app.listen(puerto ,()=>{
    console.log(`Servidor arriva ok en el puerto ${puerto}`);
});