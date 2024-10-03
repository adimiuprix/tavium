import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { promises as fs } from 'fs';
import path from 'path';
import moment from 'moment';

export async function POST(request) {
  // const data = await request.json();

  const currentTime = moment().toDate();

  await prisma.telegram_user.update({
    where: {
      telegram_id: 5478589,
    },
    data: {
      last_mining: currentTime,
    },
  });

  return NextResponse.json({ status: 200 });
}

// export async function POST(request) {
//   // const data = await request.json();
//   const filePath = path.join(process.cwd(), 'data.json');
//   const currentTime = moment().format('YYYY-MM-DD HH:mm:ss');
//   const waktu = {"last_mining" : currentTime.toString()}

//   await fs.writeFile(filePath, JSON.stringify(waktu, null, 2));

//   return NextResponse.json({
//     status: 200
//   });
// }