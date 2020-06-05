const sqlite3 = require("sqlite3").verbose()

// objeto que opera o banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// db.serialize(() => {

//     // // Criar Tabela
//     // db.run(`
//     //     CREATE TABLE IF NOT EXISTS places (
//     //         id INTEGER PRIMARY KEY AUTOINCREMENT,
//     //         image TEXT,
//     //         name TEXT,
//     //         address TEXT,
//     //         address2 TEXT,
//     //         state TEXT,
//     //         city TEXT,
//     //         items TEXT
//     //     );
//     // `)

//     // // Inserção de dados
//     // const query = `
//     // INSERT INTO places (
//     //     image,
//     //     name,
//     //     address,
//     //     address2,
//     //     state,
//     //     city,
//     //     items
//     // ) VALUES (?,?,?,?,?,?,?);`
    
//     // const values = [
//     //     "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=801&q=80",
//     //     "Papersider",
//     //     "Guilherme Gemballa, Jardim América",
//     //     "Nº 260",
//     //     "Santa Catarina",
//     //     "Rio do Sul",
//     //     "Papéis e Papelão",
//     // ]

//     // function afterInsertData(err) {
//     //     //Essa é uma callback function para ser executada no final
//     //     if (err) {
//     //         return console.log(err)
//     //     }

//     //     console.log("Cadastrado com sucesso!")
//     //     // Para usar o this não pode ser uma arrow function
//     //     console.log(this)
//     // }

//     // db.run(query, values, afterInsertData)

//     // Consultar dados na tabela
//     // db.all(`SELECT * FROM places`, function (err, rows) {
//     //     if (err) {
//     //         return console.log(err)
//     //     }

//     //     console.log("Aqui estão os seus registros: ")
//     //     console.log(rows)
//     // })

//     // Deletar um dado da tabela
    // db.run(`DELETE FROM places WHERE id = ?`, [4], function (err) {
    //     if (err) {
    //         return console.log(err)
    //     }

    //     console.log("Registro deletado com sucesso!")
    // })
// })