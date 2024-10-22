import { v2 as cloudinary } from "cloudinary";


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
//REMOVEED  THE VIDEO UPLOAD FUNCTIONALITY FROM THE BUTTON CLICK EVENT


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

export { imageUpload, videoUpload };
