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
    }
};