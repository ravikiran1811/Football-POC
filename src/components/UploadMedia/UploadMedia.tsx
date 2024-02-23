import React, { useState } from "react";
import UploadMedia from "./UploadMedia.module.scss";
import { constants } from "../../constants/stringConstants";

interface FileUploadProps {
  multiple?: boolean;
}

const FileUpload: React.FC<FileUploadProps> = ({ multiple = false }) => {
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const imageUrls = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setPreviewImages(imageUrls);
    }
  };

  const handleCancelClick = (index: number) => {
    setPreviewImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <div className={UploadMedia.container}>
      <input
        id="file-input"
        type="file"
        accept="image/png, image/jpg, image/jpeg, image/svg"
        onChange={handleFileChange}
        multiple={multiple}
        style={{ display: "none" }}
      />
      <label className={UploadMedia.label} htmlFor="file-input">
        <h2>
          <span>Select</span> {constants.uploadMedia.heading}
        </h2>
        <h3> {constants.uploadMedia.subHeading}</h3>
      </label>
      <div className={UploadMedia.previewContainer}>
        {previewImages.map((imageUrl, index) => (
          <div className={UploadMedia.preview}>
            <span
              className={UploadMedia.cancelButton}
              onClick={() => handleCancelClick(index)}
            >
              X
            </span>
            <img key={index} src={imageUrl} alt="Preview" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileUpload;
