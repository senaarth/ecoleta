const express = require("express")
const server = express()

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
    return res.render("create-point.html")
})

server.get("/search-results", (req, res) => {
    return res.render("search-results.html")
})

// Turning On the Server
server.listen(3000)