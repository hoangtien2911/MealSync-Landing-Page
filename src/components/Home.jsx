import { useEffect, useState } from 'react';
import ReactConfetti from 'react-confetti';
import { RiStarFill } from 'react-icons/ri';
import { data } from '../data/Data';

const Home = () => {
  const windowDimension = {
    width: window.innerWidth,
    height: window.innerHeight,
  };
  const [showConfetti, setShowConfetti] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setShowConfetti(false);
      }, 4000); // Delay hiding by 1 second for fade-out effect
    }, 4000); // Show confetti for 1 second

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <section
      id='home'
      className='h-cover min-h-[90vh] grid grid-cols-1 xl:grid-cols-8'
    >
      {showConfetti && (
        <ReactConfetti
          width={windowDimension.width}
          height={windowDimension.height}
          className={`${fadeOut ? 'opacity-0 transition-opacity duration-1000' : ''
            }`}
        />
      )}
      {/* Information */}
      <div className='md:col-span-5 flex items-center justify-center p-8 xl:p-16'>
        <div className='flex flex-col gap-8'>
          <h1 className='text-4xl xl:text-6xl font-bold xl:leading-[7.5rem] flex flex-wrap items-center'>
            <span>Đặt đồ ăn&nbsp;</span>
            <span>tại Làng Đại học&nbsp;</span>
            <span>với&nbsp;</span>
            <div className='flex items-center'>
              <span className='text-primary py-2 pr-6 relative inline-block'>
                MealSync
              </span>
              <div className='w-8 flex-none md:w-12'>
                <img src='Logo.png' className='w-full' />
              </div>
            </div>
          </h1>
          <p className='text-gray-500 text-2xl leading-[2.5rem]'>
            MealSync là nền tảng kết nối các cửa hàng với sinh viên khu Ký túc xá Đại học Quốc gia TP.HCM, cho phép các cửa hàng bán đồ ăn và khách hàng dễ dàng đặt món trước với khung thời gian giao hàng trong vòng 30 phút cùng với miễn phí giao hàng.
            <br /> Hãy tải xuống ngay hôm nay.
          </p>
          <div className='flex flex-col md:flex-row items-center gap-4'>
            <a
              href='#download'
              className='xl:w-auto bg-primary text-white py-4 px-8 rounded-xl text-xl'
            >
              Tải xuống ngay
            </a>
          </div>
        </div>
      </div>
      {/* Image and Floating Information Card */}
      <div className='md:col-span-3 flex justify-center md:justify-start md:items-start md:ms-[35vw] xl:items-start xl:justify-start xl:ms-14 2xl:ms-20 3xl:items-center 3xl:ms-40 mt-2 relative'>
        {/* Content images */}
        <img
          src='Welcome.png'
          className='hidden md:block w-[231px] h-[465px] 2xl:w-[231px] 2xl:h-[465px] object-cover'
        />
        <img
          src='HomePage.png'
          className='relative md:top-20 md:-start-8 w-[231px] h-[465px] xl:w-[231px] 2xl:h-[465px] object-cover'
        />
        {/* Floating Information Card */}
        <div className='hidden md:flex relative bg-white border-solid border-2 border-primary shadow-2xl rounded-lg p-4 flex-col justify-center gap-2 w-[300px] h-[140px] md:mt-[470px] md:-ml-[540px] xl:mt-[470px] xl:-ml-[540px] 3xl:mt-[620px] 3xl:-ml-[540px]'>
          <div className='flex justify-center'>
            {data.map((item) => (
              <img
                key={item.id}
                src={item.url}
                className='w-8 h-8 object-cover rounded-full ring-2'
              />
            ))}
          </div>
          <h2 className='text-xl font-bold tracking-[1px] text-gray-800'>
            120+ Sử dụng
          </h2>
          <div className='flex items-center gap-2 text-lg text-gray-500'>
            <RiStarFill className='text-primary' /> 5.0 (50+ Đánh giá)
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
