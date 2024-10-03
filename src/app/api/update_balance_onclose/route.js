import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function POST() {
    // const data = await request.json();
    // const filePath = path.join(process.cwd(), 'data.json');

    // await fs.writeFile(filePath, JSON.stringify(data, null, 2));

    return NextResponse.json({
        status: 200
    });
}