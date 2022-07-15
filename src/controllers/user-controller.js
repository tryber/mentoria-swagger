import { randomUUID } from 'crypto';
const users = [];

function getAll(req, res) {
    return res.status(200).json(users);
}

function create(req, res) {
    const { email, password } = req.body;
    const user = { email, password, id: randomUUID() };
    users.push(user);
    return res.status(201).json(user);
}

function getById(req, res) {
    const { id } = req.params;
    const userFinded = users.find(u => u.id === id);
    if(!userFinded) return res.status(404).json({ message: 'user not found' });
    return res.status(200).json(userFinded);
}

export default {
    getAll,
    getById,
    create
}