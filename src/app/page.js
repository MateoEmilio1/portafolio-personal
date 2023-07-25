'use client'  
import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin} from "react-icons/ai";
// Imagenes
import Image from 'next/image';
import tute from '../../public/tutedev.png';
import charla1 from '../../public/charla1.png';
import charla2 from '../../public/charla2.png';
import charla3 from '../../public/charla3.png';
import charla4 from '../../public/charla4.png';
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {EffectCoverflow, Pagination, Navigation } from 'swiper/modules';




export default function Home() {

  return (
    

    <main className="bg-white px-10">

    {/* SECTOR PRINCIPAL */}
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between" >
          <h1 className="text-xl font-burtons">developedbytute</h1>
          <ul className="flex items-center"> 
            <li>
              <BsFillMoonStarsFill className="cursor-pointer text-2xl"/>
            </li>
            <li>
              <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">Curriculum</a>
            </li>
          </ul>
        </nav>

        <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-teal-500 font-bold">Mateo Emilio</h2>
          <h3 className="text-2xl py-2 font-semibold">Systems engineering student</h3>
          <h3 className="text-xl py-2 font-semibold">Junior Developer</h3>
          <p className="text-md py-5 leading-8 text-gray-800 max-w-xl mx-auto md:text-xl">
          Blockchain enthusiast lorem impsum 
          lorem impsum lorem impsum lorem impsum 
          lorem impsum lorem impsum lorem impsum  
          </p>
        </div>

        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
          <AiFillTwitterCircle/>
          <AiFillLinkedin/>
        </div>
      </section>

      {/* SECTOR ABOUT ME */}

      <section className="grid gap-8 min-h-screen md:grid-cols-2 text-center md:text-left">

        <div className="py-10 text-black">
          <h2 className="text-5xl font-bold">About me</h2>
          <p className="text-xl py-10 leading-8">
            Blockchain enthusiast lorem impsum 
            lorem impsum lorem impsum lorem impsum 
            lorem impsum lorem impsum lorem impsum
            lorem impsum lorem impsum lorem impsum
            lorem impsum lorem impsum lorem impsum  
          </p>
        </div>

        <div className="sm:items-center">
          <Image className="xl:max-h-fit md:float-right  rounded-lg border-2 shadow-2xl" src={tute}/>
        </div>
        
      </section>

      {/* SECTOR COMUNICACION + CARRUSEL */}

      <section className="grid gap-8 min-h-screen md:grid-cols-2  text-center md:text-center">

      {/* Hacer en este div el Slider */}  
      <div className="sm:items-center bg-white">
        {/* <Image className="xl:max-h-fit md:float-right  rounded-full border-8 shadow-2xl" src={charla1}/> */}

      <Swiper 
      slidesPerView={'auto'}
      spaceBetween={0}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="mySwiper"
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
        slideShadows: false,
      }}
      >
        <SwiperSlide>
          <Image className="xl:max-h-fit md:float-right  rounded-md border-2 shadow-2xl" src={charla1}/>
        </SwiperSlide>

        <SwiperSlide>
          <Image className="xl:max-h-fit md:float-right  rounded-md border-2 shadow-2xl" src={charla2}/>
        </SwiperSlide>

        <SwiperSlide>
          <Image className="xl:max-h-fit md:float-right  rounded-md border-2 shadow-2xl" src={charla3}/>
        </SwiperSlide>

        <SwiperSlide>
          <Image className="xl:max-h-fit md:float-right  rounded-md border-2 shadow-2xl" src={charla4}/>
        </SwiperSlide>

        

      </Swiper>

      </div> 
      
      

      <div className="py-1s text-black">
        <h2 className="text-4xl font-bold">Communication</h2>
        <p className="text-xl py-10 leading-8">
            Charla topic bla bla bla lorem impsum 
            lorem impsum lorem impsum lorem impsum 
            lorem impsum lorem impsum lorem impsum
            lorem impsum lorem impsum lorem impsum
            lorem impsum lorem impsum lorem impsum  
          </p>
      </div>

        

      </section>
    </main>
  
  )
}
