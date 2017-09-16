'use strict';
var mongoose = require("mongoose");
var Grupos = mongoose.model("grupos");

exports.Todos = function (req, res) {
   Grupos.find({}, function (err, grupos) {
        if (err)
        { res.send(err); }
        res.json(grupos);
    });
};

exports.Crear = function (req, res) {
    var newGrupo = new Grupos(req.body);
    newGrupo.save(function (err, grupo) {
        if (err)
        { res.send(err); }
        res.json(grupo);
    });
};

exports.Obtener = function (req, res) {
    Grupos.findById(req.params.id, function (err, grupo) {
        if (err)
        { res.send(err); }
        res.json(grupo);
    });
};

exports.Actualizar = function (rq, res) {
    Grupos.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true },
        function (err, grupo) {
            if (err)
            { res.send(err); }
            res.json(grupo);
        });
};

exports.Eliminar = function (req, res) {
    Grupos.remove({ _id: req.params.id },
        function (err, grupo) {
            if (err)
            { res.send(err); }
            res.json({ message: "Grupo: " + grupo.id + " eliminado correctamente" });
        });
};