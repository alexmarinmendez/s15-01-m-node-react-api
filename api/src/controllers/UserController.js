import UserService from "../services/UserService.js"

export default class UserController {
    constructor() {
        this.userService = new UserService()
    }

    getAll = async(req, res) => res.sendSuccess(await this.userService.getAll())
    getById = async(req, res) => res.sendSuccess(await this.userService.getById(req.params.id))
    create = async(req, res) => res.sendSuccess(await this.userService.create(req.body))
    update = async(req, res) => res.sendSuccess(await this.userService.update(req.params.id, req.body))
    delete = async(req, res) => res.sendSuccess(await this.userService.delete(req.params.id))

    login = async (req, res) => {
        try {
            const userData = req.body;
            const result = await this.userService.login(userData);
            res.json({ status: 'success', payload: result });
        } catch (error) {
            res.status(401).json({ status: 'error', message: error.message });
        }
    }

    register = async (req, res) => {
        try {
            const userData = req.body;
            const newUser = await this.userService.register(userData);
            res.json({ status: 'success' });
        } catch (error) {
            res.status(500).json({ status: 'error', message: error.message });
        }
    }
}