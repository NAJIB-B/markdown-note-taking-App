const fs = require("node:fs/promises")

const AppError = require("../utils/appError")

exports.uploadFile = async(req, res, next) => {
  if (!req.file) {
    return next(new AppError('No uploaded file found', 400))
  }
  const path = req.file.path
 const data = await fs.readFile(path, 'utf8')
  console.log(data)
  res.status(200).json({
    message: "success"
  })
}
