function ensureAuthenticated(req, res, next) {
    // Проверка: пользователь залогинен?
    if (req.session && req.session.userId) {
        // Пользователь есть в сессии -> пропускаем
        return next();
    }

    // Если не авторизован - редирект на логин
    res.redirect('/login');
}

module.exports = { ensureAuthenticated };
