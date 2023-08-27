import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function GET() {
    revalidatePath('/page');
    return NextResponse.json({ revalidated: true, now: Date.now() });
}