import React, { FC } from 'react';

interface PageProps {
    params: { [key: string]: string };
}

const Page: FC<PageProps> = ({ params }) => {
    return (
        <div>
            <p>Event nr {params.number}</p>
        </div>
    );
};

export default Page;