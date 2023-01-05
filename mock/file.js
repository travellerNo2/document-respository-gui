import mockjs, { mock } from 'mockjs';

const userFilesInfo = (options) => {
  const files = mock({
    'array | 0-100': [{ fileId: '@id', fileName: '@word' }],
  });
  return files.array;
};

export default {
  userFilesInfo,
};
