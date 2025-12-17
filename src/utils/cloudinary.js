import {v2 as clodinary} from "cloudinary";
import fs from "fs";


clodinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = async (localFilePath) => {
      try {
        if(!localFilePath) return null;
        const response = await clodinary.uploader.upload(localFilePath,{
            resource_type: "auto"
        })
        console.log("file is uploaded on clodinary",response.url)
        return response;
      } catch (error) {
          fs.unlinkSync(localFilePath)
          return null;
      }
}


export {uploadOnCloudinary}

