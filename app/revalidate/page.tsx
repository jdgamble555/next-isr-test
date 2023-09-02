'use server';

import { revalidatePath } from "next/cache";

export default function server() {
    return <></>;
}

export async function revalidate() {
    revalidatePath('/');
    return {
        success: true
    };
}