
const express = require("express");

const app = express();

const cors = require("cors");

const puerto = 2004;



//-----------


const { getComics , getComicByid } = require("./controllers/comics.controllers")

app.use(cors());

app.get("/",getComics)

app.get("/:id",getComicByid)





//-----------
app.listen(puerto ,()=>{
    console.log(`Servidor arriva ok en el puerto ${puerto}`);
});