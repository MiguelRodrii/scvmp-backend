const { db } = require("../../connection");
module.exports = {
    Query: {
        datosPersonales(root, {cedula}) {
            if (cedula === undefined) {
                return db.any("select * from datos_personales order by cedula desc");
            }
            else {
                return db.any("select * from datos_personales WHERE cedula=$1", [cedula]);
            }
        }
    }
};