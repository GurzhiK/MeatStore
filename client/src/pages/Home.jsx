import React from 'react';

import CartObject from '../components/CartObject';
import Categories from '../components/Categories';
import Panel from '../components/Panel';
import Skeleton from '../components/CartObject/Skeleton';
import Sort from '../components/Sort';
import axios from 'axios'
import { SearchContext } from '../App';
import Pagination from './../components/Pagination/index';

const Home = () => {
  const { searchValue } = React.useContext(SearchContext);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: '',
    sortProperty: '',
  });


  React.useEffect(() => {
    setIsLoading(true);

    const sortBy = sortType.sortProperty.replace('-', '-');
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    axios
      .get(
        `http://127.0.0.1:8000/api/products/?ordering=title${sortBy}&ordering=${sortBy}&${category}&order=${order}&${search}&`,
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
    // window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue]);

  const meats = items.map((obj) => <CartObject key={obj.id} {...obj} />);
  const skeletons = [...new Array(4)].map((_, index) => <Skeleton key={index} />);

  return (
    <div>
      <div className="w-full h-[100vh] bg-no-repeat bg-cover bg-fixed bg-background">
        <div className=" flex flex-col items-left px-[10vh] gap-4">
          <h1 className="text-[#fff] text-[60px] text-left font-bold mt-[35vh] lg:text-center">
            СВЕЖЕЕ МЯСО <br />ЗАЛОГ ЗДОРОВОГО<br /> ЖЕЛУДКА
          </h1>
          <p className="text-gray-400 text-xl font-main">
            Адекватное качество по реальной цене
          </p>
        </div>
      </div>

      <section className="bg-backgroundAll  py-[8vh] px-[10vh]">

        {/* Каталог товаров Заголовок*/}
        <div className="relative text-left ">
          <div>
            <h2 className="text-secondary font-bold text-[60px] mt-20 mb-12 bg-backgroundAll ">Каталог</h2>
          </div>
        </div>

        {/* каталог товаров на главной странице */}
        <section className="rounded-md bg-[#2020208e] border-2 border-[#2E2E2E] lg:bg-transparent lg:border-none py-8">
          <Categories value={categoryId} onChangeCategory={(i) => setCategoryId(i)} />
          <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
          <div className="grid gap-x-[40px] gap-y-[65px] grid-cols-4 grid-rows-1 justify-items-center xl:grid-cols-2 xl:grid-rows-2 1xl:grid-cols-3 md:grid-cols-1">
            {
              isLoading ? skeletons : meats}
          </div>
        </section>
        <Pagination />
      </section>
      {/* items.map((obj) => <CartObject key={obj.id} {...obj} />) */}
      <Panel />


    </div>
  )
}

export default Home;