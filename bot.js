const { Telegraf } = require("telegraf");
require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN)


bot.start((ctx) =>{
    ctx.reply('Hola ' + ctx.from.first_name + ' ' + "te muestro una lista de cosas que podemos hacer juntos")
})

bot.launch()