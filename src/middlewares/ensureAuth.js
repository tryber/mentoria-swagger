function ensureAuth(req, res, next) {
    const auth = req.headers.authorization;
    if(!auth) return res.status(401).json({ message: 'unauthorized' })
    const [, token] = auth.split(' ');
    if(!token) {
        return res.status(401).json({ message: 'unauthorized' });
    }
    return next();
}

export default ensureAuth;