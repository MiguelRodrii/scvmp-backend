const { db } = require("../../connection");
module.exports = {
  Query: {
    detalles_ventas(root, { id }) {
      if (id === undefined)
        return db.any("select * from detalles_ventas order by id desc");
      else return db.any("select * from detalles_ventas WHERE id=$1;", [id]);
    },ventas(root, { id }) {
        if (id === undefined)
          return db.any("select * from ventas order by id desc");
        else return db.any("select * from ventas WHERE id=$1;", [id]);
      }
  }
};