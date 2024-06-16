import {Link, useNavigate} from 'react-router-dom';
import { useState, useEffect} from 'react';
import { useSelector } from 'react-redux';

export default function Headers() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        // tailwind navbar
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>전통시장 네비게이터</span>
          </h1>
        </Link>
      </div>
    </header>
    );
}