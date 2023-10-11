import multer from "multer";
import path from "path";

const imagesPath = path.join(__dirname, "/images/");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, imagesPath);
  },

  filename: (req, file, callback) => {
    console.log(file);
    callback(null, `${Date.now()}_${file.originalname.replace(" ", "")}`);
  },
});

const upload = multer({
  storage,
}).single("image");

export default upload;
