import React, { FC } from 'react';

const Loading: FC = () => {
  return (
    <div className="flex items-center justify-center w-full space-x-2 h-96 animate-bounce">
      <div className="w-8 h-8 bg-red-500 rounded-full"></div>
      <div className="w-8 h-8 bg-yellow-500 rounded-full"></div>
      <div className="w-8 h-8 bg-green-500 rounded-full"></div>
    </div>
  );
};

export default Loading;
