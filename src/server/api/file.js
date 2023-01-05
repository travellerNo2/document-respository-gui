import server from '../index';

export const fileUpload = (fileData, userId) =>
  server.post(`/file/${userId}/upload`, { fileData, userId });

export const fileDownload = (fileId, userId) =>
  server.get(`/file/${userId}/download/${fileId}`);

/**
 * [
 *   {fileId:string, fileName:string}
 * ]
 */
export const getFilesBaseInfoByUserId = (userId) =>
  server.get(`file/${userId}/info`);

/**
 * {
 * max_storage:number
 * curr_storage:number
 * }
 */
export const getStorageUsageByUserId = (userId) =>
  server.get(`file/${userId}/storage-space`);
