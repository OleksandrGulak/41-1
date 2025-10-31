# React Suspense + use() Demo

Цей проект демонструє використання нового хука **use()** у React 19 для роботи з Promise у поєднанні з **Suspense**.

## 🧩 Error Boundary

У проекті реалізовано компонент `ErrorBoundary`, який обробляє будь-які помилки, що виникають у дочірніх компонентах.
Це дозволяє безпечно відображати повідомлення про помилку користувачу, замість падіння всього застосунку.

## 🚀 Як запустити

1. Клонувати репозиторій:
   ```bash
   git clone https://github.com/USERNAME/my-react-app.git
   cd my-react-app

2. Встановити залежності:
npm install

3. Запустити локальний сервер:
npm run dev

4. Відкрити у браузері:
http://localhost:5173

## 🧠 Що демонструється

Використання React Suspense для очікування Promise.

Виклик use() для отримання даних.

Відображення fallback під час завантаження.

В браузері маєш побачити:

Демонстрація use() з Suspense
⏳ Завантаження повідомлення...

через 2 секунди

Привіт із асинхронного світу React 19!

## Структура

my-react-app/
├── src/
│   ├── components/
│   │   ├── MessageComponent.jsx
│   │   └── ErrorBoundary.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── README.md
