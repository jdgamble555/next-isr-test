'use client';

export function RefreshButton() {

    return (
        <button onClick={() => window.location.reload()}>Refresh</button>
    );
}