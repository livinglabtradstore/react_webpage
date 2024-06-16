import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TitleHeader from '../components/TitleHeader';

const API_BASE_URL = 'https://livinglabkdt5.duckdns.org';

const CategoryDetail = () => {
  const [stores, setStores] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStores = async () => {
      const searchParams = new URLSearchParams(location.search);
      const category = searchParams.get('category');

      try {
        const response = await axios.get(`${API_BASE_URL}/api/store/stores/product/${category}`);
        setStores(response.data);
      } catch (error) {
        console.error('Error fetching stores:', error);
      }
    };

    fetchStores();
  }, [location.search]);

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <TitleHeader title="Category Detail" />
      {stores.length === 0 ? (
        <p>Loading stores...</p>
      ) : (
        <>
          <ul className="space-y-4">
            {stores.map((store, index) => (
            <Link
            key={index}
            to={{
              pathname: '/storeDetail',
              search: `?storeId=${encodeURIComponent(store.store_code)}`,
            }}
            className="block bg-gray-100 rounded-lg p-4 hover:bg-gray-200"
          >
            <li>
              <h2 className="text-xl font-semibold">{store.store_name}</h2>
              <p>주소: {store.address_road}</p>
              <p>주판매품목: {store.main_product}</p>
              {/* Add more store details as needed */}
            </li>
          </Link>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default CategoryDetail;