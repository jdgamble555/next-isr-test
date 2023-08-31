'use client';

import { experimental_useFormStatus as useFormStatus } from 'react-dom';
import { useState } from "react";
import { revalidate } from "./revalidate";

export function Validate() {

    const [invalidated, setInvalidated] = useState(false);

   const data = useFormStatus();
   console.log(data);

    return (
        <>
            <form method="post" action={revalidate}>
                <button type="submit">Invalidate</button>
                <button onClick={() => window.location.reload()}>Refresh</button>
            </form>
            {invalidated && <p style={{ 'color': 'red' }}>invalidated!</p>}
        </>
    );

}
