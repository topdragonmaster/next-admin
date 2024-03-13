import { NextResponse } from 'next/server'
import ConnectDB from "../../../../DB/connectDB";
import User from "../../../../models/User";
import Joi from "joi";
import { hash } from "bcryptjs";
export const dynamic = 'force-dynamic';

const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(5).required(),
    username: Joi.string().required(),
});

export async function POST(request: Request) {
    await ConnectDB();

    const { email, password, username } = await request.json();
    const { error } = schema.validate({
        email,
        password,
        username,
    });

    if (error)
        return NextResponse.json({
            success: false,
            message: error.details[0].message.replace(/['"]+/g, ""),
        });

    try {
        const ifExist = await User.findOne({ email });

        if (ifExist) {
            return NextResponse
                .json({ success: false, message: "User Already Exist" });
        } else {
            const hashedPassword = await hash(password, 12);
            const createUser = await User.create({
                email,
                username,
                password: hashedPassword
            });
            return NextResponse
                .json({ success: true, message: "Account created successfully" });
        }
    } catch (error) {
        console.log("Error in register (server) => ", error);
        return NextResponse.json({
            success: false,
            message: "Something Went Wrong Please Retry Later !",
        });
    }
};
