const { response, request } = require("express");

const usuariosGet = (req = request, res = response) => {
  const { q, nombre = "No name", apikey, page=1, limit } = req.query;
  res.json({
    msg: "get API-controlador",
    q,
    nombre,
    apikey,
    page,
    limit,
  });
};

const usuariosPut = (req = request, res = response) => {
  const { id } = req.params;
  res.json({
    msg: "put API-controlador",
    id,
  });
};

const usuariosPost = (req = request, res = response) => {
  const { nombre, edad } = req.body;
  console.log("body", req);
  res.json({
    msg: "post API-controlador",
    nombre,
    edad,
  });
};

const usuariosDelete = (req, res = response) => {
  res.json({
    msg: "delete API-controlador",
  });
};

const usuariosPatch = (req, res = response) => {
  res.json({
    msg: "patch API-controlador",
  });
};

module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
  usuariosPatch,
};
