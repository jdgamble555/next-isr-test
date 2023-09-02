import { revalidatePath } from "next/cache";
import { BackButton } from "../back-button";

export default async function revalidate() {
    revalidatePath('/');
    return (
        <>
        <span>revalidating...</span>
        <BackButton />
        </>
    );
}