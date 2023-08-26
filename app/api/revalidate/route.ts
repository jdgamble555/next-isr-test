import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function GET(request: NextRequest) {

    /*
    const secret = request.nextUrl.searchParams.get('secret');
    if (secret !== process.env.BYPASS_TOKEN) {
        return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
    }
    */
    revalidatePath('/');
    return NextResponse.json({ revalidated: true, now: Date.now() });
}