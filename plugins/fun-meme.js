let handler = async (m, { conn, command }) => {
let ikyy = `https://api.lolhuman.xyz/api/meme/memeindo?apikey=${global.lolkey}`
    conn.sendButtonImg(m.chat, ikyy, 'Nih Meme', wm2, 'Next', `.${command}`, m) 
}
handler.help = ['meme']
handler.tags = ['fun']
handler.command = /^(meme)$/i
handler.limit = false

module.exports = handler
