import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const Dashboard: FC = () => {
  return (
    <main>
      <Link to={'/texts'}>Texts</Link>
      <Link to={'/flash-cards'}>Fishes</Link>
      <Link to={'/articles'}>Articles</Link>
      <Link to={'/stories'}>Stories</Link>
      <Link to={'/notes'}>Logs</Link>
    </main>
  );
};

export default Dashboard;
