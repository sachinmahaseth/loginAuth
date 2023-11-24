import userSchema from "../modal/userSchema.js";
import { hashPassword, comparePassword } from "../helper/aurhHelper.js";
import  JWT  from "jsonwebtoken";



export const registerController = async (req, res) => {
    const { name, email, phone, password } = req.body;

    if (!name  || !email || !phone || !password) {
        return res.status(422).json({ error: "plz fill all filled" });
    }


    try {
        const useExist = await userSchema.findOne({ email: email })
        if (useExist) {
            return res.status(422).json({ error: "email already Exist" })
        }

        const hashedPassword = await hashPassword(password);

        const user = new userSchema({ name, email, phone, password: hashedPassword });
        const userregister = await user.save();
        if (userregister) {
            res.status(201).json({ message: "user registered successfully" });
        }
    } catch (err) {
        console.log(err);
    }
}



export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(404).send({
                success: false,
                message: "Invalid email or passwords",
            });
        }
        const user = await userSchema.findOne({ email });
        console.log(user);
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "email is not registered",

            });
        }
        const match = await comparePassword(password, user.password);
        if (!match) {
            return res.status(200).send({
                success: false,
                message: 'invalid password',
            });
        }
        // token  generate

        const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });
        res.status(200).send({
            success: true,
            message: 'login succesfully',
            user: {
                _id: user._id,
                fname: user.fname,
                lname: user.lname,
                email: user.email,
                phone: user.phone,
                password: user.password,
                role:user.role

            },
            token,
        });
    } catch (err) {
        console.log(err);
    }
};

