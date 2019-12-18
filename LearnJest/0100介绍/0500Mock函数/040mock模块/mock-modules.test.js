const axios = require('./axios');
const Users = require('./Users');

// mock 整个模块
jest.mock('./axios');

test('should fetch users', () => {
  const users = [{ name: 'Bob' }];
  const resp = { data: users };

  // mock get函数返回值
  axios.get.mockResolvedValue(resp);
  // 或者可以这样：
  // axios.get.mockImplementation(() => Promise.resolve(resp));

  return Users.all(data => expect(data).toEqual(users));
});
