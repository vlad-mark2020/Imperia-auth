const express = require('express');
const path = require('path');
const connectDB = require('./config/db');
const adminRoutes = require('./routes/adminRoutes');
const authRoutes = require('./routes/authRoutes');
const loginRoutes = require('./routes/login');
const errorHandler = require('./middleware/errorHandler');
require('dotenv').config();
const cookieParser = require("cookie-parser");
const session = require('express-session');

const app = express();  // <-- Сначала создаём app

connectDB();

app.use(session({
    secret: '4na5Mh686MFppytHT9PsU4A5', // Поменяй на сложный ключ
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } // поставь false, если не HTTPS, иначе сессии не будут работать по HTTP
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', loginRoutes); 

app.use('/auth', authRoutes);   // Роуты аутентификации
app.use('/admin', adminRoutes); // Защищённые админские роуты

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
