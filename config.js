/*[[Ini untuk setting Bot
Untuk gambar background menu 
ada 
di plugins menu
untuk lainya saran jangan 
di ubah bre nanti eror]]*/

/*global owner*/
global.owner = ['6282281657946']  
global.mods = ['6282281657946'] 
global.prems = ['62856091885235']
/*Nomor Owner & payment*/
global.nameowner = '♢○○𝙄𝙠𝙮𝙮𝙊𝙛𝙛𝙞𝙘𝙞𝙖𝙡○○♢'
global.numberowner = '6282281657946' 
global.mail = 'gendonmenjeng@gmail.com' //enter your email 🗿
global.dana = '085609188523'
global.pulsa = '6285609188523'
global.gopay = '-'
/*Nama Bot & Grouplink*/
global.namebot = '⦕𝙄𝙆𝙔𝙔𝘽𝙊𝙏⦖'
global.gc = 'https://chat.whatsapp.com/Lao3HWH4lYiBzWBR38HbTX'
global.web = 'https://github.com/diki6969'
global.instagram = 'https://instagram.com/'
/*global wm*/
global.lolkey = 'SGWN'
global.zenzkey = 'BagasPrdn'
global.aikey = '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'
global.wm = '© —͟͟͞͞𖣘𝑰𝑲𝒀𝒀𝑶𝑭𝑪₴'
global.watermark = wm
global.wm2 = '⫹⫺ ⦕𝙄𝙆𝙔𝙔𝘽𝙊𝙏⦖'
global.wm3 = '© 亗𝑰𝑲𝒀𝒀-𝑴𝑫༒'
global.wm4 = '© ⦕𝙄𝙆𝙔𝙔𝘽𝙊𝙏⦖ By ♢○○𝙄𝙠𝙮𝙮𝙊𝙛𝙛𝙞𝙘𝙞𝙖𝙡○○♢'
global.fla = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text='
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.benar = 'Benar ✅\n'
global.salah = 'Salah ❌\n'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made with'
global.author = 'Bot WhatsApp\n—͟͟͞͞𖣘𝑰𝑲𝒀𝒀𝑶𝑭𝑪₴'
/*Rest api setting*/
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  zeks: 'https://api.zeks.xyz',
  zekais: 'http://zekais.com',
  lolhuman: 'https://api.lolhuman.xyz',
  tio: 'http://api.tiodevhost.my.id', 
  popcat: 'https://api.popcat.xyz',
  rey: 'https://sekha.me'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://sekha.me': 'apirey',
  'https://api.xteam.xyz': 'd37372311698ed1d',
  'https://pencarikode.xyz': 'pais', 
  'https://zekais.com': 'apikeymu',
  'https://api.lolhuman.xyz': 'SGWN',
}

/*Setting Rpg*/
global.multiplier = 45
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

/*Jangan merubah bagian ini!*/
let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})