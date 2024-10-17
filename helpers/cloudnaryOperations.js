import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

//Used to upload the video file to the cloudinary
const videoUpload = async (file) => {
  try {
    const data = await cloudinary.uploader.upload(file[0].path, {
      folder: "VIDEO",
      resource_type: "video",
    });
    return { url: data.secure_url, publicId: data.public_id };
  } catch (err) {
    console.log(err);
    throw err;
  }
};

//Used to upload the image file to the cloudinary
const imageUpload = async (file) => {
  try {
    const data = await cloudinary.uploader.upload(file[0].path, {
      folder: "IMAGE",
      resource_type: "image",
    });
    return { url: data.secure_url, publicId: data.public_id };
  } catch (err) {
    console.log(err);
    throw err;
  }
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
