import { createPool } from "mysql2/promise";
 const pool = createPool({
    host:'localhost',
    port:'3306',
    user:'root',
    driver: "MySQL",
    name: "Prueba01",
    password:'root',
    database:'Prueba01',
    password: ""
 });
 export default pool;
