import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Categories({ value, onChangeCategory }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('http://gurzhapi.space/api/categories/')
      .then((response) => {
        setCategories([{ id: null, name: 'Все' }, ...response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <ul className="flex-row gap-4 flex-wrap lg:flex-col lg:items-center justify-center flex text-[20px]">
        {categories.map((category, i) => (
          <li key={category.id} onClick={() => onChangeCategory(category.id)} className={value === category.id ? 'font-bold easy-in duration-300  flex text-center justify-center items-center text-white rounded-md border-main bg-main border-2 w-[150px] h-[40px]' : 'flex items-center justify-center w-[150px] h-[40px] hover:font-bold rounded-md duration-300 cursor-pointer bg-gray-700 text-white border-2 border-gray-700'}>
            <h1 className="px-5">{category.name}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
