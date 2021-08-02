const Telegraf = require('telegraf').Telegraf
const bottok = '1929419832:AAECjIOXK6cBu0HMc2J1hvGfGIw5WbTPJo0'
const bot = new Telegraf(bottok)
bot.start((context) => {
	console.log('Servizio avviato...')
	context.reply('Servizio ECHO avviato')
})
bot.command('text', context=>{
	text=context.update.message.text
  	context.reply('Hai scritto: '+text)
})

bot.launch()