import server from '../index';

export const fileUpload = (formData, userId) =>
  server.post(`/file/${userId}/upload`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

export const fileDownload = (fileId, userId) =>
  server.get(`/file/${userId}/download/${fileId}`);

export const getFilesBaseInfoByUserId = (userId) =>
  server.get(`file/${userId}/info`);

export const getStorageUsageByUserId = (userId) =>
  server.get(`file/${userId}/storage-space`);
