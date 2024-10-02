"use server"
import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const idTelegram = 5478589;
  const data = await prisma.telegram_user.findUnique({
    where: {
      telegram_id: idTelegram,
    },
  });

  if (data) {
    const serializedUser = {
      ...data,
      telegram_id: data.telegram_id.toString(),
      mining_speed: data.mining_speed.toString(),
    };
    return NextResponse.json(serializedUser, { status: 200, 'Pragma': 'no-cache', });
  } else {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }
}
