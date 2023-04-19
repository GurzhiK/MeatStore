import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function CartPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/products/detail/${id}/`).then((response) => {
      setProduct(response.data);
    })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      <div className="px-40 py-40 justify-around flex-wrap rounded-md bg-[transparent] border-2 border-[#2E2E2E] min-h-[90vh] grid grid-flow-col content-around gap-5 lg:px-14 lg:py-14 lg:justify-between sm:items-center sm:justify-center sm:px-0 sm:grid-flow-row">
        <div className="max-w-[50vw] sm:min-w-[70vw] min-h-[40vh] bg-cover">
          <img src={product.imageUrl} alt="img" className="rounded-md" />
        </div>
        <div>
          <div className="text-white">
            <h1 className="text-[35px] text-main font-bold">{product.title}</h1>
            <h2 className="text-lg text-gray-600">Описание </h2>
            <p>{product.description}</p>
          </div>
          <div className="text-gray-600 mt-5">
            <h2>Категория</h2>
            <ul className="flex">
              <li className="border-b-[1px] border-gray-600">Мясо</li>
              <li>Говядина</li>
              <li>Новинки</li>
              <li>{product.category}</li>
            </ul>
          </div>
          <div>
            <button href="#" className="text-white hover:text-gray-800 font-bold bg-main hover:bg-main duration-300 rounded-md text-[17px] w-44 h-10 mt-8 ">В корзину</button>
          </div>
          <Link to='/'><button className="bg-transparent w-44 h-10 rounded-md border-2 border-gray-700 text-gray-500 hover:bg-gray-700 hover:text-white duration-300 mt-3">Вернуться назад</button></Link>
        </div>
      </div>
    </div>
  )
}

export default CartPage;