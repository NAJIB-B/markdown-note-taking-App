const express = require("express")
const multer = require("multer")
const upload = multer({dest: "../uploads"})

const {uploadFile} = require("../controllers/noteController")

const router = express.Router()

router.post("/upload", upload.single('testFile'), uploadFile)

router.post("/check-grammar", (req, res) => {
  res.status(200).json({
    message: "success"
  })
})

router.post("/render-note", (req, res) => {
  res.status(200).json({
    message: "success"
  })
})


module.exports = router
