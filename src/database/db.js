// importing sqlite dependence
const sqlite3 = require("sqlite3").verbose()

// Creating Database Object
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// db.serialize(() => {
//     // Creating a Table
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)

//     // Insert Data in the Table
//     const query = `
//         INSERT INTO places (
//             image,
//             name,
//             address,
//             address2,
//             state,
//             city,
//             items
//         ) VALUES (?, ?, ?, ?, ?, ?, ?);
//     `
//     const values = [
//         "http://localhost:3000/assets/papersider.jpeg",
//         "Papersider",
//         "Guilherme Gemballa, Jardim América",
//         "Número 260",
//         "Santa Catarina",
//         "Rio do Sul",
//         "Resíduos Eletrônicos, Lâmpadas"
//     ]

//     function afterInsertData(err) {
//         if (err) {
//             return console.log(err)
//         }
//         console.log("Cadastro Sucedido")
//         console.log(this)
//     }

//     db.run(query, values, afterInsertData)

// Delete some Data of the Table
// db.run(`DELETE FROM places WHERE id = ?`, [2], function(err) {
//     if (err) {
//         return console.log(err)
//     }
//     console.log("Registro Deletado")
// })

// Consult Data
// db.all(`SELECT * FROM places`, function(err, rows) {
//     if (err) {
//         return console.log(err)
//     }
//     console.log("Registros:")
//     console.log(rows)
// })
// })