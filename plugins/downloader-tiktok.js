let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
if (!args[0]) throw 'Uhm..url nya mana?'
m.reply(wait)
let res = await fetch(`https://api.lolhuman.xyz/api/tiktok?apikey=SGWN&url=${args[0]}`)
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.status) throw json
let { link, title, author, statistic, duration } = json.result
let { username, nickname } = author
let { play_count, like_count, comment_count } = statistic
await conn.sendFile(m.chat, link, 'video.mp4', `
 💌 *Deskripsi*: ${title}
 ⌛ *Durasi*: ${duration} Detik
 📛 *Username*: ${username}
 📌 *Nickname*: ${nickname}
 👀 *Penonton*: ${play_count}
 👍 *Jumlah Like*: ${like_count}
 💬 *Komentar*: ${comment_count}
\n\n\n🏢 *By*: IkyyOFC
`, m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }})
}

handler.help = ['tiktok <url>', 'tt <url>', 'ttdl <url>']
handler.tags = ['downloader']

handler.command = /^(tt|tiktok|ttdl|tiktokdl|tiktokdownload|ttdownload)$/i
handler.limit = true
module.exports = handler
