const ADMIN_USER = 'X';
const ADMIN_PASS = 'VN5EK99e6c8mzPj9';

exports.renderLoginPage = (req, res) => {
    res.render('login', { error: null });
};

exports.login = (req, res) => {
    const { username, password } = req.body;

    if (username === ADMIN_USER && password === ADMIN_PASS) {
        req.session.isAuthenticated = true; // ✅ Сохраняем сессию
        console.log('✅ Логин успешный, сессия сохранена.');
        res.redirect('/admin');
    } else {
        res.render('login', { error: '❌ Неверный логин или пароль' });
    }
};

exports.logout = (req, res) => {
    req.session.destroy(err => {
        if (err) console.error(err);
        res.redirect('/login');
    });
};
