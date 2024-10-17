import multer from "multer";

// Use '/tmp' directory for writable access in cloud environments
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Switch to '/tmp' or a different writable directory for temporary storage
    cb(null, "public/tmp");
  },
  filename: (req, file, cb) => {
    // Prevent filename collisions with Date.now()
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage: storage });

export default upload;
