import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import userModel from "../models/UserModel.js";

export default class UserService {
    getAll = async () => await userModel.find();
    getById = async (id) => await userModel.findOne({ _id: id });
    create = async (data) => await userModel.create(data);
    update = async (id, data) => await userModel.updateOne({ _id: id }, data);
    delete = async (id) => await userModel.deleteOne({ _id: id });

    async register(userData) {
        const { name, password, email } = userData;

        if (!name || !password || !email) {
            throw new Error('All fields are required');
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await userModel.create({
            name,
            password: hashedPassword,
            email
        });

        return newUser;
    }

    async login(userData) {
        const { email, password } = userData;

        const user = await userModel.findOne({ email });

        if (!user) {
            throw new Error('Invalid email or password');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            throw new Error('Invalid password');
        }
        
        const token = jwt.sign(
            { userId: user._id, name: user.name },
            process.env.JWT_SECRET || 'your_jwt_secret',
            { expiresIn: '1h' }
        );

        return { token };
    }
}
