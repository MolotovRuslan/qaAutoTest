const TelegramBot = require('node-telegram-bot-api');
const token = '1674082355:AAGxad-ZYovLh2spM27SWcga_tYQ-FfkQwY';
const fs = require('fs');
const bot = new TelegramBot(token, {
    polling: true
});
const chat_id = 218858759;
const imgPath = 'C:\\Users\\Ruslan\\Desktop\\111\\test.png';

bot.sendPhoto (chat_id, fs.readFileSync(imgPath));

