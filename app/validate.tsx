'use client';

import { useState } from "react";

export function Validate() {

    let [invalidated, setInvalidated] = useState(false);

    return (
        <>
            <button type="submit" onClick={() => fetch(window.location.origin + '/api/revalidate').then(() => setInvalidated(true))}>
                Invalidate
            </button>
            <button onClick={() => window.location.reload()}>Refresh</button>
            {invalidated && <p style={{ 'color': 'red' }}>invalidated!</p>}
        </>
    );

}
