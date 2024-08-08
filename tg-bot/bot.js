require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const webApp = process.env.NGROK_SERVER;
const token = process.env.TG_BOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, async (msg) => {
  const chatId = msg.chat.id;

  await bot.sendMessage(chatId, 'Добро пожаловать!', {
    reply_markup: {
      keyboard: [
        [
          {
            text: 'Открыть магазин',
            web_app: { url: webApp }
          }
        ]
      ],
      resize_keyboard: true,
      one_time_keyboard: true
    }
  });
});

bot.on('message', async (msg) => {
  const text = msg.text;
  const chatId = msg.chat.id;

  if (text === '/start') {

    await bot.sendMessage(chatId, 'Перейти в интернет-магазин', {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'Перейти', web_app: { url: webApp } }]
        ]
      }
    });
  }
});

module.exports = bot;
