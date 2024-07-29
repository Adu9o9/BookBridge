import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Aboutus = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
  <div className='w-3/4 m-auto'>
    <div className='mt-20'>
     <Slider {...settings}>
       {data.map((d) => (
        <div className='bg-white h-[450px] text-black rounded-xl'>
          <div className='rounded-t-xl bg-orange-950 flex justify-center items-center'>
            <img src={d.img} alt='' className='h-44 w-44 rounded-full'/>
          </div>
           <div className='flex flex-col justify-center items-center gap-4 p-4'>
            <p className='text-xl font-semibold'>{d.name}</p>
            <p>{d.review}</p>
            <a href='www.linkedin.com/in/adinath-manoj-nambiar-3b1b75292'>
               <button className=' bg-orange-950 text-white text-xl px-6 py-1 rounded-xl'>
                Connect with me!
               </button>
            </a>
           </div>

         </div>
        
      
      ))}
     </Slider> 
    </div>

  </div>
  );
}

const data = [
  {
    name: `Amal Varghese`,
    img: `/students/image_3.jpeg`,
    review: 'Perumbavoor'
  },
  {
    name: `Pranav Paul`,
    img: `/students/image_2.jpeg`,
    review: `Angamaly`
  },
  {
    name: `Adinath Manoj`,
    img: `/students/image_3.jpeg`,
    review: `Kannur`
  },
  {
    name: `Cebin Mec`,
    img: `/students/image_4.jpeg`,
    review: `Thudapuzha`
  },
  {
    name: `Alan M Varghese`,
    img: `/students/image_5.jpeg`,
    review: `Kollam`
  },
  
];



export default Aboutus;
