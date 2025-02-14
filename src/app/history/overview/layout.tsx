import React from 'react';

type Props = {
  presentations: React.ReactNode;
  events: React.ReactNode;
};

export default function HistoryLayout({ presentations, events }: Props) {
  return (
    <div>
      <div>{events}</div>
      <div>{presentations}</div>
    </div>
  );
}
