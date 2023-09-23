'use client';

import TimeAgo from 'react-timeago';

type Props = {
  time: string;
};

export const LiveTimeStamp = ({ time }: Props) => {
  return <TimeAgo date={time} />;
};
