const { Telegraf } = require("telegraf");
require('dotenv').config()


const bot = new Telegraf(process.env.BOT_TOKEN)


bot.start((ctx) =>{
    console.log(ctx)
    ctx.reply('Hola ' + ctx.from.first_name + ' ' + "esta es la lista de comandos que puedes utilizar:",
    "/start" )
})

bot.command('tok', (ctx) => ctx.reply(ctx.tg.options.apiRoot))

bot.hears('Hola',(ctx) => ctx.reply('Hola ' + ctx.from.first_name))

bot.on('sticker', (ctx) => ctx.reply('👍'))

bot.command('hipster', Telegraf.reply('λ'))

bot.launch()