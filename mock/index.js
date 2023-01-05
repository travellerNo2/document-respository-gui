import mockjs from 'mockjs';

import user from './user';
import file from './file';

mockjs.setup({
  timeout: '200-600',
});

mockjs.mock(/\/file\/[0-9a-zA-Z]+\/info/, 'get', file.userFilesInfo);

mockjs.mock(/user\/login/, 'post', user.login);
