const { db } = require("../../connection");
module.exports={
    Query:{
        usuarios(root,cedula){
            console.log(db.any("select * from usuarios")) 
            if(cedula === undefined)
                return db.any("select * from usuarios order by id decs")
            else
                return db.any("select * from usuarios WHERE cedula=$1",[cedula])
        }
    }
}