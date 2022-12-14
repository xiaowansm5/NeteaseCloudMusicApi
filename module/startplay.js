// 播放音乐

module.exports = (query, request) => {
  const data = {
    logs: JSON.stringify([
      {
        action: 'startplay',
        json: {
          content: query.content,
          id: query.id,
          type: 'song',
        },
      },
    ]),
  }

  return request('POST', `https://music.163.com/weapi/feedback/weblog`, data, {
    crypto: 'weapi',
    cookie: query.cookie,
    proxy: query.proxy,
    realIP: query.realIP,
  })
}
