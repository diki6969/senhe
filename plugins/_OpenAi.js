const { Configuration, OpenAIApi } = require('openai');
let handler = async (m, { command, conn, text }) => {
if (!text) throw "[!] Masukkan teks."
const configuration = new Configuration({
    apiKey: global.aikey,
});
if (command == 'ai') {
const openai = new OpenAIApi(configuration);
m.reply('Sedang Diproses')
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: text,
            temperature: 0,
            max_tokens: 3000,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0
        });
            m.reply(response.data.choices[0].text)
 }
if (command == 'aidraw') {
const openai = new OpenAIApi(configuration);
let start1 = 'Menginisialisasi'
let start2 = 'Mengkonfigurasikan'
let start3 = 'Membuat Gambar'
await m.reply(start1)
await m.reply(start2)
await m.reply(start3)
const response = await openai.createImage({
  prompt: text,
  n: 1,
  size: "1024x1024",
});
let url = response.data.data[0].url;
conn.sendButtonImg(m.chat, url, 'Nih Udah Selesai', wm2, 'Next', `.${command} ${text}`, m) 
}
}

handler.command = handler.help = ['ai', 'aidraw']
handler.tags = ['internet', 'tools']
module.exports = handler