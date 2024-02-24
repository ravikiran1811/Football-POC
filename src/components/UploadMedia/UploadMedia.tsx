import React, { useState } from "react";
import UploadMediaStyles from "./UploadMedia.module.scss";
import { constants } from "../../constants/stringConstants";
import { Box, Modal, Typography } from "@mui/material";

interface FileUploadProps {
  multiple?: boolean;
}
const UploadMedia: React.FC<FileUploadProps> = ({ multiple = false }) => {
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const handleOpenModal = (index: number) => {
    setOpenModal(true);
    setSelectedImageIndex(index);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedImageIndex(null);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setPreviewImages((prevImages) => {
        const imageUrls = Array.from(files).map((file) =>
          URL.createObjectURL(file)
        );
        return [...prevImages, ...imageUrls];
      });
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
          <div className={UploadMediaStyles.preview} key={index}>
            <span
              className={UploadMediaStyles.cancelButton}
              onClick={() => handleCancelClick(index)}
            >
              X
            </span>
            <img
              src={imageUrl}
              alt="Preview"
              onClick={() => handleOpenModal(index)}
              className={UploadMediaStyles.chooseImage}
            />
          </div>
        ))}
      </div>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={UploadMediaStyles.imageModal}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          </Typography>
          <Typography id="modal-modal-description">
            <div className={UploadMediaStyles.modalElements}>
            <div className={UploadMediaStyles.imageElement}>
            <span onClick={handleCloseModal} className={UploadMediaStyles.closeButton}>X</span>
            {selectedImageIndex !== null && (
              <img
                src={previewImages[selectedImageIndex]}
                alt="Preview"
                className={UploadMediaStyles.imageStyle}
              />
              
            )}
            </div>
            </div>
           
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
export default UploadMedia;
