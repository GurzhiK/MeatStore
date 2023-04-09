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
      <div className="flex px-40 py-40 justify-around flex-wrap  rounded-md bg-[transparent] border-2 border-[#2E2E2E] min-h-[90vh]">
        <div>
          <img src={product.imageUrl} alt="img" width='700' className="rounded-md max-h-[700px] h-full w-full max-w-[600px]" />
        </div>
        <div className="flex flex-col">
          <div className="text-white max-w-[800px] min-w-[500px]">
            <h1 className="text-[35px] text-main font-bold">{product.title}</h1>
            <h2 className="text-lg text-gray-600">Описание </h2>
            <p>{product.description}</p>
          </div>
          <div className="text-gray-600 mt-5">
            <h2>Категория</h2>
            <ul className="flex gap-2">
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