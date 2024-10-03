import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request) {
    const data = await request.json();

    await prisma.telegram_user.update({
        where: {
          telegram_id: 5478589,
        },
        data
      });

    return NextResponse.json({
        status: 200
    });
}