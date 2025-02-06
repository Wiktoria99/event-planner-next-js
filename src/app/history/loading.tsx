import React, { FC } from 'react';

interface PageProps {
  params: { [key: string]: string };
}

const LoadingPage: FC<PageProps> = () => {
  return (
    <div>
      <p>Loading Events</p>
    </div>
  );
};

export default LoadingPage;
