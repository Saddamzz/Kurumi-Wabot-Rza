const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernumber = ['6283847334166', '6283839521483']
global.ownername = "Rza Ganz"//owner name
global.ytname = "YT: Rezdv4"
global.socialm = "GitHub: Rez4-4"
global.location = "indonesia"

global.botname = 'BOT WHATSAPP' //name of the bot

//sticker details
global.stickername = 'Sticker'
global.packname = 'Sticker By'
global.author = 'Rz Bot'
//console view/theme
global.themeemoji = '🍬'
global.wm = "Rz botz."

//theme link
global.link = 'https://github.com/Rez4-4/Kurumi-Wabot-Rza'

//custom prefix
global.prefa = ['.']

//false=disable and true=enable
global.welcome = false //auto welcome
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = false //auto view status/story



//reply messages
global.mess = {
    done: '*📣Selesai🚩* \n\n*🎨 Rez Bot 🎨*\n\n*👥Ayu Follow aku jika mau link:* \nhttps://github.com/Rez4-4/Kurumi-Wabot-Rza\n',
    prem: '*Fitur ini hanya dapat digunakan oleh pengguna premium* \nhttps://github.com/Rez4-4/Kurumi-Wabot-Rza\n',
    admin: '*Fitur ini hanya dapat digunakan oleh admin saja*',
    botAdmin: '*Fitur ini hanya dapat digunakan apabila bot merupakan admin grup*',
    owner: '*Fitur ini hanya dapat digunakan oleh pemiliknya .owner* \nhttps://github.com/Rez4-4/Kurumi-Wabot-Rza\n',
    group: '*Fitur ini hanya dapat digunakan oleh admin saja*',
    private: '*Fitur ini hanya untuk obrolan pribadi*',
    wait: '*⏱️Process...*',    
    error: '*Error!*',
}

global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
