import { revalidatePath } from "next/cache";
import { BackButton } from "../back-button";

export const dynamic = 'force-dynamic';

export default async function revalidate() {
    revalidatePath('/');
    return (
        <>
        <span>revalidating...</span>
        <BackButton />
        </>
    );
}