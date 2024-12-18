import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const { userid } = useParams(); // Match the parameter name in your routes
  return (
    <div className="bg-orange-500 text-black text-3xl text-center py-5">
      User: {userid}
    </div>
  );
};

export default User;
