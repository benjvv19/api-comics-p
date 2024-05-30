
const {request , response}= require("express");
const { comics } = require ("../comics");

const getComics = (req,res)=>{

    return res.json({
        ok:true,
        statusCode:200,
        comics
    });
}


const getComicByid = (req=request , res=response)=>{

    let id = parseInt(req.params.id);

    let comicABuscar = "";

    comicABuscar = comics.find((comic)=>{
        return comic.id === id;
    });

    if(comicABuscar){
        return res.json({
            ok:true,
            statusCode:200,
            comicABuscar
        });
    }else{
        return res.json({
            ok:true,
            statusCode:404,
            msg:"No hay comics con ese id"
        });
    }
}

module.exports = {
    getComics,
    getComicByid
}

