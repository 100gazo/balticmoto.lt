export const adminAuth = (req, res, next) => {
    if(req.session.loggedin && req.session.user.role === 1)
        return next()

        res.status(401).send('Pasibaigė Jūsų sesijos laikas')
}