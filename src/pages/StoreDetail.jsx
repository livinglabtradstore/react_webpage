import { useEffect, useState, startTransition } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import TitleHeader from '../components/TitleHeader';
import StoreMap from '../components/NaverMap';


const API_BASE_URL = 'https://livinglabkdt5.duckdns.org';

const StoreDetail = () => {
  const [store, setStore] = useState(null);
  const [imageList, setImageList] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const storeId = searchParams.get('storeId');
  const handleImageClick = (imagePath) => {
    startTransition(() => {
      setSelectedImage(imagePath);
    });
  };

  const handleCloseImage = () => {
    startTransition(() => {
      setSelectedImage(null);
    });
  };

  useEffect(() => {
    const fetchStoreDetail = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/store/stores/storecode/${storeId}`);
        startTransition(() => {
          setStore(response.data[0]);
        });
      } catch (error) {
        console.error('Error fetching store detail:', error);
      }
    };

    const fetchImageList = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/store/store/images/${storeId}`);
        startTransition(() => {
          setImageList(response.data.file_list);
        });
      } catch (error) {
        console.error('Error fetching image list:', error);
      }
    };

    if (storeId) {
        Promise.all([fetchStoreDetail(), fetchImageList()]).finally(() => {
            setLoading(false);
        });
        }
    }, [storeId]);
    if (loading) {
        return <p>Loading store detail...</p>;
    }

      if (!store) {
        return <p>Store not found.</p>;
    }

  return (
    <div className="container mx-auto px-4 py-8">
      <TitleHeader title={store.store_name} />
      <div className="bg-gray-100 rounded-lg p-6 mb-8">
        {/* <p><strong>상점 코드:</strong> {store.store_code}</p> */}
        <p>
  <strong>상점명</strong>
  <br />
  {store.store_name}
</p>
<p>
  <strong>도로명 주소</strong>
  <br />
  {store.address_road}
</p>
<p>
  <strong>지번 주소</strong>
  <br />
  {store.address_land}
</p>
<p>
  <strong>업종</strong>
  <br />
  {store.store_type}
</p>
<p>
  <strong>주요 판매 상품</strong>
  <br />
  {store.main_product}
</p>
        {/* <p><strong>위도:</strong> {store.latitude}</p> */}
        {/* <p><strong>경도:</strong> {store.longitude}</p> */}
        {/* <p><strong>사진 확인:</strong> {store.photo_check}</p> */}
      </div>
 
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">사진 갤러리</h2>
        {imageList.length > 0 ? (
          <div className="grid grid-cols-3 gap-4">
            {imageList.map((imagePath, index) => (
              <img
                key={index}
                src={`${API_BASE_URL}/${imagePath}`}
                alt={`Store Image ${index + 1}`}
                className="w-full h-auto rounded-lg shadow-md cursor-pointer"
                onClick={() => handleImageClick(imagePath)}
              />
            ))}
          </div>
        ) : (
          <p>이미지없음</p>
        )}
      </div>
      {selectedImage && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={handleCloseImage}
        >
          <img
            src={`${API_BASE_URL}/${selectedImage}`}
            alt="Enlarged Image"
            className="max-w-full max-h-full"
          />
        </div>
      )}
           <div className='mb-8'>
      <h2 className="text-2xl font-bold mb-4">가게 위치</h2>
      <StoreMap latitude={store.latitude} longitude={store.longitude} />
    </div>
    </div>
  );
};

export default StoreDetail;