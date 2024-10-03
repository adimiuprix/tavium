import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(request) {
    const data = await request.json();
    const filePath = path.join(process.cwd(), 'data.json');
    const print = {"data" : data}

    await fs.writeFile(filePath, JSON.stringify(print, null, 2));

    return NextResponse.json({
        status: 200
    });
}