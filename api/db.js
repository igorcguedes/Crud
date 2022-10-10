import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "iguinsinistro123",
    database: "crud"
})
