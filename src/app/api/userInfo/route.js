import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
    const id = 1;

    try {
        const user = await prisma.telegramuser.findUnique({
            where: { id: parseInt(id) },
        });

        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        return NextResponse.json(user, { status: 200 });

    } catch (error) {
        console.error("Error fetching user:", error);
        return NextResponse.json({ error: "Unable to fetch user data" }, { status: 500 });
    }
}
