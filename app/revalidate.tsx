'use server';

import { revalidatePath } from "next/cache";

export async function revalidate() {
    console.log('test');
    revalidatePath('/');
    return {
        success: true
    };
}