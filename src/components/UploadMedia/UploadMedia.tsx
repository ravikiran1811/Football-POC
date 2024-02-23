import React, { useState } from "react";
import UploadMediaStyles from "./UploadMedia.module.scss";
import { constants } from "../../constants/stringConstants";

interface FileUploadProps {
  multiple?: boolean;
}

const UploadMedia: React.FC<FileUploadProps> = ({ multiple = false }) => {
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
    <div className={UploadMediaStyles.container}>
      <input
        id="file-input"
        type="file"
        accept="image/png, image/jpg, image/jpeg, image/svg"
        onChange={handleFileChange}
        multiple={multiple}
        style={{ display: "none" }}
      />
      <label className={UploadMediaStyles.label} htmlFor="file-input">
        <h2>
          <span>Select</span> {constants.uploadMedia.heading}
        </h2>
        <h3> {constants.uploadMedia.subHeading}</h3>
      </label>
      <div className={UploadMediaStyles.previewContainer}>
        {previewImages.map((imageUrl, index) => (
          <div className={UploadMediaStyles.preview}>
            <span
              className={UploadMediaStyles.cancelButton}
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

export default UploadMedia;
