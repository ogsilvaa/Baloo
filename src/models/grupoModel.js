'use strict';
var mongoose= require("mongoose");
var Schema=mongoose.Schema;

var grupoSchema= new Schema({
    nombre:{
        type:String,
        required:'Debe tener un nombre'
    },
    numeral:{
        type:Number,
        required:"Debe tener un numeral"
    },
    localidad:{
        type:String,
        required:"Debe pertenecer a una localidad"
    }
});

module.exports= mongoose.model("grupos",grupoSchema);