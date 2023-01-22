var {
	youtubeSearch,
	youtubedl,
	youtubedlv2,
	youtubedlv3
                } = require('@bochilteam/scraper');
   var handler = async (m, { 
    conn,
    text, 
    usedPrefix
               }) => {
  if (!text) throw 'Apa Judulnya?'
  var vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'Video/Audio Tidak Ditemukan'
  var { title, 
        description, 
        thumbnail, 
        videoId, 
        durationH, 
        durationS,
        viewH,
        publishedTime
                       } = vid
  var url = 'https://www.youtube.com/watch?v=' + videoId
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.status) throw json
  let { title, link, description, duration, view  } = json.result
  let { link } = link
  let kintil = link
  let web = kintil
  m.reply('Tunggu Sebentar')
  var captionvid = `⭔ Title: ${title}\n⭔ Duration: ${durationH}\n⭔ Views: ${viewH}\n⭔ Description: ${description}\n⭔ Url:  ${url}`
  var pesan = await conn.sendButtonImg(m.chat, thumbnail,  captionvid, '_Audio on progress..._', 'Video', '${usedPrefix}ytv ${url}', m, {  
      quoted: m})
 if (durationS > 36000) return conn.sendMessage(m.chat, { text: `*Link Original:* ${await cut(url)}\n\n_Durasi terlalu panjang_` }, { quoted: pesan })
  conn.sendMessage(m.chat, { audio: { url: web }, mimetype: 'audio/mpeg' }, { quoted: pesan })
}
handler.command = handler.help = ['play', 'song', 'lagu'];
handler.tags = ['downloader'];
handler.exp = 0;
handler.limit = true;
handler.premium = false;
module.exports = handler;
async function cut(url) {
  url = encodeURIComponent(url)
  let res = await fetch(`https://api.lolhuman.xyz/api/shortlink2?apikey=SGWN&url=${url}`)
  if (!res.ok) throw false
  return await res.text()
}
