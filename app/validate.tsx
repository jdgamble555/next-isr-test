'use client';

import { useState } from "react";
import { revalidate } from "./revalidate/page";


export function Validate() {

    const [invalidated, setInvalidated] = useState(false);

   async function revalidateAction() {
    const res = await revalidate();
   }

    return (
        <>
            <form action={revalidateAction}>
                <button type="submit">Invalidate</button>
                <button onClick={() => window.location.reload()}>Refresh</button>
            </form>
            {invalidated && <p style={{ 'color': 'red' }}>invalidated!</p>}
        </>
    );

}
