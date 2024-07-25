import React, { useState } from 'react';
import { Button, Typography } from '@material-ui/core';
import axios from 'axios';

function ImageUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [ocrText, setOcrText] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/upload/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setOcrText(response.data.text);
    } catch (error) {
      console.error("Error uploading the file:", error);
    }
  };

  return (
    <div>
      <input
        accept="image/*"
        style={{ display: 'none' }}
        id="raised-button-file"
        type="file"
        onChange={handleFileChange}
      />
      <label htmlFor="raised-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload Image
        </Button>
      </label>
      <Button variant="contained" color="secondary" onClick={handleUpload} disabled={!selectedFile}>
        Extract Text
      </Button>
      {ocrText && (
        <Typography variant="body1" style={{ marginTop: '20px' }}>
          {ocrText}
        </Typography>
      )}
    </div>
  );
}

export default ImageUpload;
