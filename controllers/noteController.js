const markdownit = require("markdown-it")
const {markdownToTxt} = require("markdown-to-txt")
const axios = require("axios")

const fs = require("node:fs/promises")
const path = require("path")
const querystring = require("querystring")

const AppError = require("../utils/appError")
const catchAsync = require("../utils/catchAsync")


const md = markdownit()


const deleteFile = async(path) => {
fs.unlink(path)
}

const validateFile = (file) => {

  if (!(file.originalname.endsWith(".md"))) {
    throw new AppError("The file should be a markdown file i.e ends with '.md'", 400)
  }
  const sizeInMb = file.size / (1024 * 1024)

  if (sizeInMb > 2) {
    throw new AppError("The file exceeds the file limit. The limit is 2mb", 400) 
  }
}



exports.uploadFile = catchAsync( async(req, res, next) => {
  if (!req.file) {
    return next(new AppError('No uploaded file found', 400))
  }

  validateFile(req.file)
  
  const filePath = path.join(__dirname, '..', req.file.path) 
 const data = await fs.readFile(filePath, 'utf8')
  deleteFile(filePath)
  res.status(200).json({
    message: "success"
  })
})




exports.checkGrammar = catchAsync( async(req, res, next) => {
  if (!req.file) {
    return next(new AppError('No uploaded file found', 400))
  }


  validateFile(req.file)
  
  const filePath = path.join(__dirname, '..', req.file.path) 
  const markdownText = await fs.readFile(filePath, 'utf8')

  const text = markdownToTxt(markdownText)

  const grammarChecks = await axios.post("https://api.languagetoolplus.com/v2/check", querystring.stringify({
    language: "en-US",
    text 
  }))


  const data = grammarChecks.data.matches

  deleteFile(filePath)

  res.status(200).json({
    message: "success",
    data
  })
}) 
