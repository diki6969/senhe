let handler = async (m, { conn }) => {
let ikyy = 'https://api.lolhuman.xyz/api/meme/darkjoke?apikey=SGWN'
    conn.sendButtonImg(m.chat, ikyy, 'Dark? 🤨', wm2, 'NEXT', '.darkjokes', m)
}
handler.help = ['darkjokes']
handler.tags = ['internet', 'fun']
handler.command = /^(dragjokes|darkjokes)$/i

module.exports = handler