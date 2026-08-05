const multer = require("multer");

const upload = multer({
  storage: multer.memoryStorage(),          // or diskStorage for production
  limits: {
    fileSize: 5 * 1024 * 1024,              // 5 MB
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "application/pdf") {
      cb(null, true);
    } else {
      cb(new Error("Only PDF files are allowed!"));
    }
  },
});

module.exports = upload;