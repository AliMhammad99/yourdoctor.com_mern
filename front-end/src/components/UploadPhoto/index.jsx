import React, { useState, useContext } from "react";
import ImageUploadDataService from "../../services/imageUpload";
import GlobalStates from "../../utils/GlobalStates";
import BasicUserDataService from "../../services/basicUser";

export default function UploadPhoto() {
  const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setpreviewSource] = useState();
  const [selectedFile, setSelectedFile] = useState("");

  const handleImageInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setpreviewSource(reader.result);
    };
  };

  const handleSubmitFile = (e) => {
    e.preventDefault();
    if (!previewSource) return;
    uploadImage(previewSource);
  };

  const uploadImage = async (base64EncodedImage) => {
    //console.log(base64EncodedImage);

    await ImageUploadDataService.insertImage({ img: base64EncodedImage })
      .then((result) => {
        // globalStates.setAccountID(result.data.public_id);
        //console.log(result.data.public_id + "");

        BasicUserDataService.updateBasicUser({
          profile_picture: result.data.secure_url,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <div>
        {/* onChange={} value={}  */}
        <form onSubmit={handleSubmitFile}>
          <input
            type="file"
            name="image"
            onChange={handleImageInputChange}
            value={fileInputState}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      {previewSource && (
        <img
          src={previewSource}
          alt="chosen image"
          style={{ width: "300px" }}
        />
      )}
    </>
  );
}
