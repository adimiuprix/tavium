import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

// export async function POST(request) {
//   const data = await request.json();

//   return NextResponse.json({ data }, { status: 200 });
// }

export async function POST(request) {
  const data = await request.json();
  const filePath = path.join(process.cwd(), 'data.json');

  const existingData = JSON.parse(await fs.readFile(filePath, 'utf-8').catch(() => '[]'));

  existingData.push(data);
  await fs.writeFile(filePath, JSON.stringify(existingData, null, 2));

  return NextResponse.json({ data }, { status: 200 });
}