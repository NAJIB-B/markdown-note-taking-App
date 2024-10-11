const express = require("express")
const multer = require("multer")
const upload = multer({dest: "./uploads"})

const {uploadFile, checkGrammar} = require("../controllers/noteController")

const router = express.Router()

router.post("/upload", upload.single('markdownFile'), uploadFile)

router.post("/check-grammar",  upload.single('markdownFile'), checkGrammar)

router.post("/render-note", (req, res) => {
  res.status(200).json({
    message: "success"
  })
})


module.exports = router
