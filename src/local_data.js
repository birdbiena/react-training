function randomString(len) {
  len = len || 32;
  // let timestamp = new Date().getTime();
  let $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
  let maxPos = $chars.length;
  let randomStr = '';

  for (let i = 0; i < len; i++) {
    randomStr += $chars.charAt(Math.floor(Math.random() * maxPos));
  }

  return randomStr;
}

export default {
  list: [
    { id: randomString(), item: '开发-1', done: false, create: new Date().getTime() },
    { id: randomString(), item: '测试-1', done: false, create: new Date().getTime() },
    { id: randomString(), item: '链调-1', done: false, create: new Date().getTime() },
    { id: randomString(), item: '开发-2', done: false, create: new Date().getTime() },
    { id: randomString(), item: '测试-2', done: false, create: new Date().getTime() },
    { id: randomString(), item: '链调-2', done: false, create: new Date().getTime() },
    { id: randomString(), item: '开发-3', done: false, create: new Date().getTime() },
    { id: randomString(), item: '测试-3', done: false, create: new Date().getTime() },
    { id: randomString(), item: '链调-3', done: false, create: new Date().getTime() },
    { id: randomString(), item: '开发-4', done: false, create: new Date().getTime() },
    { id: randomString(), item: '测试-4', done: false, create: new Date().getTime() },
    { id: randomString(), item: '链调-4', done: false, create: new Date().getTime() },
    { id: randomString(), item: '开发-5', done: false, create: new Date().getTime() },
    { id: randomString(), item: '测试-5', done: false, create: new Date().getTime() },
    { id: randomString(), item: '链调-5', done: false, create: new Date().getTime() }
  ],
  headers: [
    { key: 'id', name: 'id', dataIndex: 'id' },
    { key: 'name', name: 'Name', dataIndex: 'name' },
    { key: 'state', name: 'State', dataIndex: 'state' },
    { key: 'date', name: 'Date', dataIndex: 'date' }
  ],
  newToDo: '',
  number: 0
};
