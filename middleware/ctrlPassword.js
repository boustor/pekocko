

module.exports = (req, res, next) => {
    const password = req.body.password;
    let vError = "";

    if (password.match(/[0-9]/g) && //Au moins 1 chiffre.
        password.match(/[A-Z]/g) && //Au moins 1 caractère majuscule.
        password.match(/[a-z]/g) && //Au moins 1 caractère minuscule.
        password.match(/[^a-zA-Z\d]/g) && //Au moins 1 caractère spécial.
        password.length >= 8) {
        next();
    } else {
        res.status(401).json({
            "message": "Password  not valid"
        });
    }
}
