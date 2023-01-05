import React, { useRef } from 'react';
import Button from 'src/components/Button/Button';
import { fileUpload } from '../../server/api/file';
import './File.css';

export default function File() {
  const fileRef = useRef();

  const handleClick = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', fileRef.current.files[0]);
    try {
      const response = await fileUpload(formData);
      alert('upload file(s) successfully');
    } catch (err) {
      alert(err);
    }
  };

  return (
    <form className="file-upload">
      <div>
        <span>上传文件：</span>
        <input id="file-uploader" ref={fileRef} type="file" multiple />
      </div>
      <Button onClick={(e) => handleClick(e)}>Upload</Button>
    </form>
  );
}
