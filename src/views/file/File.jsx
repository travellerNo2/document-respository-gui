import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import Button from 'src/components/Button/Button';
import { fileUpload, getFilesBaseInfoByUserId } from '../../server/api/file';
import { getUser } from '../../store/user';
import './File.css';

export default function File() {
  const [filesInfo, setFilesInfo] = useState([]);
  const fileRef = useRef();
  const { userId } = useSelector(getUser);

  useEffect(() => {
    getFilesBaseInfoByUserId(userId)
      .then((res) => {
        setFilesInfo(res.data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  async function handleClick(e) {
    e.preventDefault();
    const { files } = fileRef.current;
    if (files.length < 1) {
      alert('请先选定文件');
      return;
    }
    let formData = new FormData();
    Object.values(files).forEach((file) => {
      formData.append('files', file);
      formData.append(
        'filesInfo[]',
        JSON.stringify({ name: file.name, size: file.size })
      );
    });

    try {
      const response = await fileUpload(formData, userId);
      alert('upload file(s) successfully');
    } catch (err) {
      alert(err.details);
    }
  }

  return (
    <>
      <table id="files-info">
        <tr className="header">
          <th>File Name</th>
          <th>Size</th>
          <th>/</th>
          <th>/</th>
        </tr>
        {filesInfo.map((fileInfo, index) => (
          <tr key={index}>
            <th>{fileInfo.name}</th>
            <th>{fileInfo.size}</th>
            <th className="action">download</th>
            <th className="action">delete</th>
          </tr>
        ))}
      </table>
      <form className="file-upload">
        <div>
          <span>上传文件：</span>
          <input
            id="file-uploader"
            name="file"
            ref={fileRef}
            type="file"
            multiple
          />
        </div>
        <Button onClick={(e) => handleClick(e)}>Upload</Button>
      </form>
    </>
  );
}
