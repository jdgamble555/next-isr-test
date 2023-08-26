'use client';

import { useState } from "react";

export function Validate() {

    const [invalidated, setInvalidated] = useState(false);

    const invalidate = async () => {
        const r = await fetch(window.location.origin + '/api/revalidate');
        const x = await r.json();
        if (x.revalidated) {
            setInvalidated(true);
        }
    };

    return (
        <>
            <button type="submit" onClick={invalidate}>
                Invalidate
            </button>
            <button onClick={() => window.location.reload()}>Refresh</button>
            {invalidated && <p style={{ 'color': 'red' }}>invalidated!</p>}
        </>
    );

}
