let fg = require('api-dylux') 
let handler = async (m, { conn, args, usedPrefix, command }) => {
 
 if (!args[0]) throw `🎥 Masukan Url Video\n\n📌 Contoh:\n*${usedPrefix + command}* https://fb.watch/d7nB8-L-gR/`
    m.reply(wait)
   try {
   let res = await fg.fbdl(args[0])
    for (let result of res.download) {
    	  let tex = `
┌─⊷ *FBDL*
▢ *Resolusi:* ${result.quality}
└───────────`
    conn.sendFile(m.chat, result.url, 'fb.mp4', tex, m)
     } 
   
 } catch {
 	m.reply('Error: Link Tidak Ditemukan')
 	} 
}
handler.help = ['facebook'].map(v => v + ' <url>')
handler.tags = ['dl']
handler.command = /^((facebook|fb)(downloder|dl)?)$/i

module.exports = handler
