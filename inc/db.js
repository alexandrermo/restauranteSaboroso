const mysql=require("mysql2");

const connection=mysql.createConnection({
    host:"localhost",
    user:"user",
    password:"651433a@",
    database:"saboroso",
    multipleStatements: true
});

module.exports=connection;