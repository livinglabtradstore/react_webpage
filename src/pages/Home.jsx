import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const categories = [
    { name: '한식', queryPath: '한식' },
    { name: '패션', queryPath: '패션' },
    { name: '농산물', queryPath: '농산물' },
    { name: '정육/계란', queryPath: '정육' },
    { name: '수산물', queryPath: '수산물' },
    { name: '기타', queryPath: '기타' },
    { name: '유통', queryPath: '유통' },
    { name: '음료', queryPath: '음료' },
    { name: '분식', queryPath: '분식' },
    { name: '간편식', queryPath: '간편식' },
    { name: '베이커리', queryPath: '베이커리' },
    { name: '중식', queryPath: '중식' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold mb-8 text-black-600 shadow-lg px-6 py-4 text-center">
    동대구시장 도움이
    </h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={{
              pathname: '/categoryDetail',
              search: `?category=${encodeURIComponent(category.queryPath)}`,
            }}
            className="bg-gray-200 rounded-lg p-4 text-center hover:bg-gray-300 transition duration-300"
          >
            <h2 className="text-xl font-semibold">{category.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;