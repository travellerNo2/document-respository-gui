import mockjs, { mock } from 'mockjs';

const userFilesInfo = (options) => {
  const files = mock({
    'array|0-100': [{ file_id: '@id', file_name: '@word', size: '1MB' }],
  });
  return files.array;
};

export default {
  userFilesInfo,
};
