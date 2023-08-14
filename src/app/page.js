'use client'  
import Head from 'next/head';
import {AiFillLinkedin, AiFillGithub} from "react-icons/ai";
// Imagenes
import Image from 'next/image';
import tute from '../../public/tutedev.png';
import charla1 from '../../public/charla1.png';
import charla2 from '../../public/charla2.png';
import charla3 from '../../public/charla3.png';
import charla4 from '../../public/charla4.png';
import sun from '../../public/Sun.svg';
import moon from '../../public/Moon.svg';
//DarkMode
import { ThemeProvider, useTheme} from 'next-themes';
import { useState,useEffect } from 'react';
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {EffectCoverflow, Pagination, Navigation } from 'swiper/modules';


export default function Home({ Component, pageProps }) {
 
  const changeDarkMode = () => {
      document.documentElement.classList.toggle("dark");
  };

  return (
    
    <main className="bg-white px-10 dark:bg-slate-800">

    {/* SECTOR PRINCIPAL */}
      
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between" >

          <h1 className="text-xl font-burtons"></h1>

          <ul className="flex items-right">
       

            <li>
                 {/* DARK THEME */}
              <button 
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-2 py-1.5 rounded-md ml-8" 
              onClick={changeDarkMode} >
                Noche/Dia
              </button>
              <a 
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" 
              href="https://drive.google.com/drive/folders/1mVeYA3crYMvmJnp3LlYqR3O9F-67vzk_?usp=drive_link"  
              rel="noopener noreferrer"
              target="_blank"> {/* The _blank value specifies that the resource should be loaded into a new tab. */} 
              Curriculum
              </a>
            </li>

          </ul>
        </nav>

        <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-teal-500 font-bold">Mateo Emilio</h2>
          <h3 className="text-2xl py-2 font-semibold dark:text-white">Systems engineering student</h3>
          <h3 className="text-xl py-2 font-semibold dark:text-white">Junior Developer</h3>
          <p className="text-md py-5 leading-8 text-gray-800 max-w-xl mx-auto md:text-xl dark:text-white">
          Blockchain enthusiast lorem impsum 
          lorem impsum lorem impsum lorem impsum 
          lorem impsum lorem impsum lorem impsum  
          </p>
        </div>

        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white">
          <a href="https://linkedin.com/in/MateoEmilio1"
          rel="noopener noreferrer"
          target="_blank">
          <AiFillLinkedin/>
          </a>

          <a href="https://github.com/MateoEmilio1"
          rel="noopener noreferrer"
          target="_blank">
          <AiFillGithub/>
          </a>
          
        </div>
      </section>
      
      {/* SECTOR ABOUT ME */}

      
      <section className="grid gap-8 min-h-screen md:grid-cols-2 text-center md:text-left">

        <div className="py-20 text-black dark:text-white">
          <h2 className="text-5xl font-bold e">About me</h2>
          <p className="text-xl py-10 leading-8 ">
            Blockchain enthusiast lorem impsum 
            lorem impsum lorem impsum lorem impsum 
            lorem impsum lorem impsum lorem impsum
            lorem impsum lorem impsum lorem impsum
            lorem impsum lorem impsum lorem impsum  
          </p>
        </div>

        <div className="sm:items-center py-20">
          <Image className="xl:max-h-fit md:float-right  rounded-lg border-2 shadow-2xl" src={tute}/>
        </div>
        
      </section>
      

      {/* SECTOR COMUNICACION + CARRUSEL */}

      
      <section className="grid gap-8 min-h-screen md:grid-cols-2 py-52 text-center md:text-center">

      {/* Hacer en este div el Slider. */}  
      <div className="sm:items-center">
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
      roundLengths={true}
      >
        <SwiperSlide>
          <Image className="xl:max-h-fit md:float-right rounded" src={charla1}/>
        </SwiperSlide>

        <SwiperSlide>
          <Image className="xl:max-h-fit md:float-right rounded" src={charla2}/>
        </SwiperSlide>

        <SwiperSlide>
          <Image className="xl:max-h-fit md:float-right rounded" src={charla3}/>
        </SwiperSlide>

        <SwiperSlide>
          <Image className="xl:max-h-fit md:float-right rounded" src={charla4}/>
        </SwiperSlide>

        

      </Swiper>

      </div> 
      
      

      <div className="py-1s text-black dark:text-white">
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
