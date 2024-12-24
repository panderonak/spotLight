import multer from 'multer';
import path from 'path';

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0');
const day = String(currentDate.getDate()).padStart(2, '0');
const formattedDate = `${year}-${month}-${day}`;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/temp');
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const uniqueSuffix = `${Date.now()}-${Math.floor(Math.random() * 1e9)}`;
    const newFileName = `${file.fieldname}-${formattedDate}-${uniqueSuffix}${ext}`;
    cb(null, newFileName);
    console.log(file);
  },
});

const upload = multer({
  storage,
});

export default upload;
