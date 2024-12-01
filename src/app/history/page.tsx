import React from 'react';
import Link from "next/link";

function Page() {
    return (
        <div>
            Events from the past
            <Link href="/history/1">Event 1</Link>
            <Link href="/history/2">Event 2</Link>
        </div>
    );
}

export default Page;