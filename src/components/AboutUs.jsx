import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';
import { useLayoutEffect, useRef, useState } from 'react';
import { data } from '../data/Data';

const AboutUs = () => {
  
  const [isActive, setIsActive] = useState(0);
  const timeoutRef = useRef(null);

  useLayoutEffect(() => {
    timeoutRef.current = setInterval(() => {
      setIsActive((prevIndex) => {
        // Handle wrapping around at the end
        return (prevIndex + 1) % data.length;
      });
    }, 2000); // Update image every 2 seconds

    return () => clearInterval(timeoutRef.current);
  }, [isActive]);

  return (
    <section
      id='aboutUs'
      className='xl:min-h-[100vh] p-8 flex flex-col justify-center gap-8 bg-gray-100'
    >
      <h1 className='flex flex-col md:flex-row justify-center text-[40px] text-center font-black'>
        Về chúng tôi&nbsp;
        <div className='flex justify-center items-center'>
          <span className='text-primary relative inline-block'>MealSync</span>
          <div className='ms-4 w-8 flex-none md:w-12'>
            <img src='Logo.png' className='w-full' />
          </div>
        </div>
      </h1>
      <div className='flex justify-center gap-4'>
        <span className='text-5xl text-primary'>
          <RiDoubleQuotesL />
        </span>
        <p className='max-w-2xl text-center text-gray-500'>
          Chúng tôi bắt đầu từ những điều nhỏ bé để phục vụ những điều lớn lao.
          MealSync ở đây để đáp ứng những mong muốn ẩm thực hàng ngày của bạn.
          Thiết thực, quen thuộc và có giá trị. MealSync làm phong phú cuộc sống
          hàng ngày của bạn, từng bữa ăn một.
        </p>
        <span className='text-5xl text-primary'>
          <RiDoubleQuotesR />
        </span>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <div className='grid grid-cols-3 gap-4 lg:grid-cols-5'>
          {data.map((item, id) =>
            isActive === id ? (
              <img
                key={item.id}
                src={item.url}
                className='w-12 h-12 md:w-20 md:h-20 object-cover rounded-full ring-4 ring-primary p-1 bg-white'
              />
            ) : (
              <img
                key={item.id}
                src={item.url}
                className='w-12 h-12 md:w-20 md:h-20 object-cover rounded-full'
              />
            )
          )}
        </div>
        <h3 className='text-center text-[24px] font-bold mt-12'>
          {data[isActive].name}
        </h3>
        <h5 className='text-center text-[20px] text-gray-500'>
          {data[isActive].role}
        </h5>
      </div>
    </section>
  );
};

export default AboutUs;
