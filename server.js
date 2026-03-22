const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

let menu = {
  "Понеделник": [
    { name: "Пилешко", portions: 10, posno: false },
    { name: "Ориз", portions: 8, posno: true }
  ],
  "Вторник": [
    { name: "Свинско", portions: 12, posno: false },
    { name: "Грав", portions: 6, posno: true }
  ],
  "Среда": [
    { name: "Тестенини", portions: 9, posno: true },
    { name: "Плескавица", portions: 7, posno: false }
  ],
  "Четврток": [
    { name: "Риба", portions: 11, posno: false },
    { name: "Компир", portions: 5, posno: true }
  ],
  "Петок": [
    { name: "Пица", portions: 10, posno: false },
    { name: "Салата", portions: 7, posno: true }
  ],
  "Сабота": [
    { name: "Бурек", portions: 15, posno: false },
    { name: "Зелка", portions: 6, posno: true }
  ],
  "Недела": [
    { name: "Скара", portions: 13, posno: false },
    { name: "Грав посен", portions: 8, posno: true }
  ]
};

app.get('/api/menu', (req, res) => {
  res.json(menu);
});

app.post('/api/take', (req, res) => {
  const { day, index } = req.body;
  if (menu[day][index].portions > 0) {
    menu[day][index].portions--;
    res.json({ success: true, portions: menu[day][index].portions });
  } else {
    res.json({ success: false, message: "Нема повеќе порции!" });
  }
});

app.listen(3000, () => {
  console.log('Сервер работи на http://localhost:3000');
});