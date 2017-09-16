'use strict';
module.exports = function (app) {
    var grupoController = require("../controllers/grupoController");
    app.route("/grupo")
        .get(grupoController.Todos)
        .post(grupoController.Crear);

    app.route("/grupo/:id")
        .get(grupoController.Obtener)
        .delete(grupoController.Eliminar)
        .put(grupoController.Actualizar);
};