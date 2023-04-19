import IconCar from '../assets/img/panelcon/icon_car.svg';
import Meat from '../assets/img/panelcon/meat.png';
import Meat1 from '../assets/img/panelcon/meat1.jpg';
import Meat2 from '../assets/img/panelcon/meat2.jpg';

export const Panel = () => {
  return (
    <>
      <section className=" px-[10vh] mt-24 ">
        {/* Блоки с плюсами Заголовок*/}
        <div className="text-left ">
          <div>
            <h2 className=" text-secondary font-bold text-[60px] mt-20 mb-12 bg-backgroundAll md:text-[40px]">Достоинства</h2>
          </div>
        </div>
        <div className=" rounded-md border-2 border-[#2E2E2E] flex bg-[#2020208e] p-14 lg:p-0 lg:bg-transparent lg:border-none justify-between lg:flex-col lg:items-center flex-wrap  mb-[25vh]">

          <div className=" lg:mb-11 xl:mb-11 flex flex-col rounded-md w-[400px] h-[450px] bg-[transparent]  relative lg:w-[250px]">
            <div className="bg-Panel w-full h-full bg-cover rounded-sm" />
            <div className="p-3 break-words text-center">
              <h1 className="text-[#fff] text-[24px] font-bold mb-7 lg:text-[14px]">Отличное качество</h1>
              <p className="text-[#fff] font-light text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate a iure odit harum corporis libero totam, deleniti corrupti maxime provident eaque autem? Molestiae eum facilis accusamus, voluptates odio in deleniti?</p>
            </div>
          </div>
          <div className=" lg:mb-11 xl:mb-11 flex flex-col rounded-md w-[400px] h-[450px] bg-[transparent]  relative lg:w-[250px]">
            <div className="bg-Panel2 w-full h-full bg-cover rounded-sm" />
            <div className="p-3 break-words text-center">
              <h1 className="text-[#fff] text-[24px] font-bold mb-7 lg:text-[14px]">Отличное качество</h1>
              <p className="text-[#fff] font-light text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate a iure odit harum corporis libero totam, deleniti corrupti maxime provident eaque autem? Molestiae eum facilis accusamus, voluptates odio in deleniti?</p>
            </div>
          </div>
          <div className=" lg:mb-11 xl:mb-11 flex flex-col rounded-md w-[400px] h-[450px] bg-[transparent]  relative lg:w-[250px]">
            <div className="bg-Panel3 w-full h-full bg-cover rounded-sm" />
            <div className="p-3 break-words text-center">
              <h1 className="text-[#fff] text-[24px] font-bold mb-7 lg:text-[14px]">Отличное качество</h1>
              <p className="text-[#fff] font-light text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate a iure odit harum corporis libero totam, deleniti corrupti maxime provident eaque autem? Molestiae eum facilis accusamus, voluptates odio in deleniti?</p>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Panel;