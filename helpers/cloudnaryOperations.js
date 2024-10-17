import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

//Used to upload the video file to the cloudinary
const videoUpload = async (file) => {
  const buffer = await file.arrayBuffer();
  const bytes = Buffer.from(buffer);
  return new Promise(async (resolve, reject) => {
    await cloudinary.uploader
      .upload_stream(
        {
          resource_type: "video",
          folder: "VIDEO",
        },
        async (err, result) => {
          if (err) {
            return reject(err.message);
          }
          return resolve(result);
        }
      )
      .end(bytes);
  });
};

//Used to upload the image file to the cloudinary
const imageUpload = async (file) => {
  const buffer = await file.arrayBuffer();
  const bytes = Buffer.from(buffer);
  return new Promise(async (resolve, reject) => {
    await cloudinary.uploader
      .upload_stream(
        {
          resource_type: "image",
          folder: "IMAGE",
        },
        async (err, result) => {
          if (err) {
            return reject(err.message);
          }
          return resolve(result);
        }
      )
      .end(bytes);
  });
};



//This is used to remove the files  from the local storage that is /pblic/tem after sucessfully being uploaded into the cloudinary

const removeFile = async (path) => {
  fs.unlink(path, (err) => {
    if (err) {
      console.log(err);
    }
  });
  console.log("File deleted sucesfully");
};

export { imageUpload, videoUpload, removeFile };
