import React from 'react';

const ConnectButton = ({ connect }) => {
  return (
    <button onClick={connect} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Connect
    </button>
  );
};

export default ConnectButton;
