const express = require('express');
const cors = require('cors');
const bot = require('./bot');
const connection = require('./db');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors({
  origin: process.env.NGROK_SERVER
}));


app.get('/api/products', async(req, res) =>{
  try{
    const [results] = await connection.query('SELECT * FROM `products`');
    res.json(results)
    console.log(results);
  }catch(err){
    console.error('Ошибка во время получения товаров:', err);
    res.status(500).json({ error: 'Не удалось получить товары' });
  }
})

app.listen(process.env.SERVER_PORT, () =>{
  console.log('Сервер запущен')
})
