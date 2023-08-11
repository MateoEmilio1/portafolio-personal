'use client'  
import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub} from "react-icons/ai";
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
          <h1 className="text-xl font-burtons">poner algo aca?</h1>
          <ul className="flex items-right"> 
            <li>
              <BsFillMoonStarsFill className="cursor-pointer text-2xl"/>
            </li>
            <li>
              <a 
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" 
              href="https://doc-14-5c-prod-02-apps-viewer.googleusercontent.com/viewer2/prod-02/pdf/ss3rnlveuf8tv316bjvf008e5907cbt8/i6mi9nsdqnem77ljb4hr5psmp08o5stp/1690292475000/3/117746624012228893345/APznzaYIjy6VzabT78ZfjFYR0-GSQlTLvlbQFtxn4cX6qK7w9m3PJMuTzvSPe7sChQ_8eswdJvwYoMKTBRQdN6R0wGcHMW8QGM5mwnrL6G3OI_P0LlZkiFfd6scnZ7iw2I6UaHRW2R7EtUGJKHUDf_b-LYAzzttlsmbVYU5Dj-IpW2l1JX-59UXNhDoQw6sYgqTffg85X1t_7NFcPYvywFQSoyA_Jo7hbQsPZAJX3OKqIRSya0eNuFixsGs9uBGw48oT39-LfuEqzTA-XA4f_sGiibkyrYBKCWTGqsmGWC7lxFhth1lPeP4ATJmi7xNA8UWyTo2wMdgSi3OsTGwZpR8NoVnZnIOvGST39f1lkA0P_Yb7hSTWeyhEKh1EheEObhgo1Cn1LUNylLOrySQvNqj4Uvp12-7cjA==?authuser=0&nonce=aeohilr9fk9f0&user=117746624012228893345&hash=ekoaiq7v0cfbcsdubtkk0dr5lin71g6g"  
              rel="noopener noreferrer"
              target="_blank"> {/* The _blank value specifies that the resource should be loaded into a new tab. */} 
              Curriculum
              </a>
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
        {/* href="www.linkedin.com/in/mateo-emilio-0ab656215" */}
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

        <div className="py-20 text-black">
          <h2 className="text-5xl font-bold">About me</h2>
          <p className="text-xl py-10 leading-8">
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
