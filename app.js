const express = require("express")

const path = require("path")

const noteRouter = require("./routes/noteRoute")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')))

app.use("/", noteRouter)

app.all("*", (req, res) => {

  res.status(404).json({
    message: "Not found. please check the route and try again"
  })
})


app.use((err, req, res, next) => {
  console.log(err)
  res.status(err.statusCode).json({
    message: err.message,
    status: err.status,
    stack: err.stack
  })
})


module.exports = app
