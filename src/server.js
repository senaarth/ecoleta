const express = require("express")
const server = express()

// gettin the database
const db = require("./database/db.js")

// Setting Public Page
server.use(express.static("public"))

// Template End
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

// Setting application paths
// home page
server.get("/", (req, res) => {
    return res.render("index.html")
})

server.get("/create-point", (req, res) => {
    // console.log(req.query)
    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {
    return res.send("ok")
})

server.get("/search-results", (req, res) => {
    // get the data from the db
    db.all(`SELECT * FROM places`, function(err, rows) {
        if (err) {
            return console.log(err)
        }
        const total = rows.length
        return res.render("search-results.html", { places: rows, total })
    })
})

// Turning On the Server
server.listen(3000)