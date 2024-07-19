import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
    try {
        const { name, email, phoneNo, subject, message } = await req.json();
        await prisma.contact.create({
            data: {
                name,
                email,
                phoneNo,
                subject,
                message
            },
        });
        return NextResponse.json({ message: "Contact Form Created Successfully!" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Contact Form Error?", error }, { status: 500 });
    }
};

export const GET = async (req, res) => {
    try {
        const fetchContactForm = await prisma.contact.findMany();
        return NextResponse.json({ fetchContactForm });
    } catch (error) {
        return NextResponse.json({ message: "Contact Form Fetching Data Error?", error }, { status: 500 });
    }
}