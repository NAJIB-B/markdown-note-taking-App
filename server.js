const mongoose = require("mongoose")

require("dotenv").config()

const app = require("./app")


mongoose.connect(process.env.DATABASE)
.then(()=> console.log("Database connection successful"))




app.listen(3000, () => {
  console.log(`app running at port 300`)
})
