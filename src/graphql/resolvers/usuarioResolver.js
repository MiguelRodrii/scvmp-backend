const { db } = require("../../connection");
module.exports = {
    Query: {
        usuarios(root, {cedula}) {
            if (cedula === undefined) {
                return db.any("select * from usuarios order by cedula desc");
            }
            else {
                return db.any("select * from usuarios WHERE cedula=$1", [cedula]);
            }
        }
    }, Usuario:{
        datos_personales(usuarios){
            return db.any(
                `select dp.* from usuarios u, datos_personales  dp where u.cedula =
                 dp.cedula and dp.cedula=$1`,[usuarios.cedula])
        }
    }
};