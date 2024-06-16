import React from 'react';
import { useNavigate } from 'react-router-dom';

const TitleHeader = ({ title }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-3xl font-bold">{title}</h1>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center"
        onClick={handleGoBack}
      >
        Back
      </button>
    </div>
  );
};

export default TitleHeader;