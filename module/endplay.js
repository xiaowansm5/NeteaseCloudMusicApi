// 听歌打卡

module.exports = (query, request) => {
  const data = {
    logs: JSON.stringify([
      {
        action: 'play',
        json: {
          content: query.content,
          download: 0,
          end: 'ui',
          id: query.id,
          sourceId: query.sourceId,
          time: query.time,
          type: 'song',
          wifi: 0,
          source: 'list',
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
