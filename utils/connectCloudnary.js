import { v2 as cloudinary } from "cloudinary";

export const connectCloudinary = async () => {
  try {
    const connected =  await cloudinary.config({

      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.CLOUD_API_KEY,
      api_secret: process.env.CLOUD_API_SECRET,
    })

    if(connected){
        console.log("Cloudinary connected successfully");
    }else{
        console.log("Failed to connect to Cloudinary");
    }

  } catch (error) {
    console.log("Error while connecting cloudinary", err);
  }
};
