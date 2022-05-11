import http from "../http-common";

class ImageUploadDataService {
  static insertImage(image) {
    console.log("insert image");
    return http.post("/imageUpload", image);
  }

  // static insertImage(image) {
  //   console.log("insert image");
  //   return http.post("/imageUpload", image);
  // }
}

export default ImageUploadDataService;
