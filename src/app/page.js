"use client";
import Head from "next/head";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
// Imagenes
import Image from "next/image";
import tute from "../../public/tutedev.png";
import tute2 from "../../public/tutedev2.png";
import sun from "../../public/Sun.svg";
import moon from "../../public/Moon.svg";
import charla1 from "../../public/images/charla1.png";
import charla2 from "../../public/images/charla2.png";
import charla3 from "../../public/images/charla3.png";
import charla4 from "../../public/images/charla4.png";
import charla5 from "../../public/images/charla5.jpg";
import proyecto1 from "../../public/images/screenCuantosDolares.png";

//Datos
import articulos from "./articulos.js";
import workshops from "./workshops";

//DarkMode
import { ThemeProvider, useTheme } from "next-themes";
import { useState, useEffect } from "react";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

//CSS
import styles from "../app/globals.css";

export default function Home({ Component, pageProps }) {
  const changeDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <main className="bg-white px-10 dark:bg-slate-800">
      {/* SECTOR PRINCIPAL */}

      <div className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-center sm:justify-end">
          <ul className="flex items-center sm:items-right">
            <li>
              {/* DARK THEME */}
              <button
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-2 py-1.5 rounded-md ml-8"
                onClick={changeDarkMode}
              >
                Noche/Dia
              </button>
              <a
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                href="https://drive.google.com/drive/folders/1mVeYA3crYMvmJnp3LlYqR3O9F-67vzk_?usp=drive_link"
                rel="noopener noreferrer"
                target="_blank"
              >
                {" "}
                {/* The _blank value specifies that the resource should be loaded into a new tab. */}
                Curriculum
              </a>
            </li>
          </ul>
        </nav>

        <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-teal-500 font-bold">
            Mateo Emilio
          </h2>
          <h3 className="text-2xl py-2 font-semibold dark:text-white">
            Systems engineering student
          </h3>
          <h3 className="text-xl py-2 font-semibold dark:text-white">
            Junior Developer
          </h3>
          <p className="text-md py-5 leading-8 text-gray-800 max-w-xl mx-auto md:text-xl dark:text-white">
            Blockchain Enthusiast and coding passionate, studying and learning
            every day what I love, read more about me below!
          </p>
        </div>

        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white">
          <a
            href="https://linkedin.com/in/MateoEmilio1"
            rel="noopener noreferrer"
            target="_blank"
            className="transition-all hover:scale-125"
          >
            <AiFillLinkedin />
          </a>

          <a
            href="https://github.com/MateoEmilio1"
            rel="noopener noreferrer"
            target="_blank"
            className="transition-all hover:scale-125"
          >
            <AiFillGithub />
          </a>
        </div>
      </div>

      {/* PROYECTOS */}
      <div className="grid gap-8 min-h-screen py-52 text-center md:text-center">
        {/* PARTE DERECHA */}

        <div className=" text-black dark:text-white  ">
          <h2 className="text-6xl font-bold pb-10">Proyectos</h2>
          <p className="text-2xl pb-14 leading-8">
            Proyectos personales en los cuales practico mis habilidades para
            luego aplicarlos en el ambito laboral.
          </p>
          {/* PROYECTOS */}
          {/* CALCULADORA DE DOLARES */}
          <div className="sm:items-center mx-10 md:mx-20 xl:mx-40 border-2 border-gray-400 dark:border-white rounded-md">
            <div className="grid md:justify-center mx-10 py-10">
              <h4 className="text-3xl font-bold">Calculadora de Dolares</h4>
              <p className="text-lg py-10 leading-8">
                Si vivis en Argentina, la incertidumbre cambiaria hace que saber
                el valor del dolar sea una necesidad, esta simple pagina te
                informa el valor actual de los tipos de dolares y calcular la
                cantidad de dolar que equivalen tus pesos.
              </p>
              <div className=" ">
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://cuantos-dolares-tengo-app.vercel.app/"
                >
                  <Image
                    className="xl:max-h-fit md:float-right rounded shadow-lg "
                    alt="Logo"
                    src={proyecto1}
                  ></Image>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Fin PROYECTOS */}
      </div>

      {/* SECTOR ABOUT ME */}

      <section className="grid gap-8 min-h-screen md:grid-cols-2 text-center md:text-left">
        <div className="py-20 text-black dark:text-white">
          <h2 className="text-5xl font-bold">About me</h2>
          <p className="text-xl py-10 leading-8 ">
            Advanced systems engineering student at UTN FRRO, I began my career
            path within the tech world in the Aurora Latam community (L2 of NEAR
            Protocol) doing research and teaching the foundations of the
            blockchain world through courses and talks, there I had the
            opportunity to travel to Lima, Peru on behalf of Aurora. After
            almost 1 year I made the decision to move forward on my path and
            today I am lucky to be currently working as a Developer at SEED
            Latam, the largest community in Latin America of the Ethereum
            blockchain. PD: I love trekking!
          </p>
        </div>

        <div className="sm:items-center py-20">
          {/* Desktop */}
          <Image
            className="hidden md:block xl:max-h-fit md:float-right rounded-lg border-2 shadow-2xl"
            src={tute}
          />
          {/* Responsive */}
          <Image
            className="md:hidden xl:max-h-fit md:float-right rounded-lg border-2 shadow-2xl"
            src={tute2}
          />
        </div>
      </section>

      {/* SECTOR WORKSHOP + CARRUSEL */}

      <section className="grid gap-8 min-h-screen md:grid-cols-2 py-52 text-center md:text-center">
        {/* Hacer en este div el Slider. */}
        <div id="Page" className="sm:items-center">
          {/* <Image className="xl:max-h-fit md:float-right  rounded-full border-8 shadow-2xl" src={charla1}/> */}

          <Swiper
            slidesPerView={"auto"}
            spaceBetween={0}
            loop={true}
            pagination={{
              clickable: true,
              type: "bullets",
            }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="carruselOfTute"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
          >
            {/* WORKSHOPS */}

            {/* MAPEA LOS WORKSHOPS */}
            {workshops.map((workshop) => (
              <SwiperSlide onClick={workshop.muestra}>
                <a className="cursor-pointer" onClick={workshop.muestra}>
                  <div>
                    <img
                      fill={true}
                      className="xl:max-h-fit md:float-right rounded"
                      src={workshop.img}
                      onClick={workshop.muestra}
                    ></img>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Modals */}

          {/* modal 1 */}
          <dialog
            id="my_modal_1"
            className="modal rounded-3xl justify-center dark:bg-slate-800 dark:text-white"
          >
            <form method="dialog" className="modal-box">
              <div className={styles.headerModal}>
                {/* <button className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-2 py-1.5 rounded-md ml-8 absolute right-2 top-2">
                ✕
              </button> */}
              </div>
              <div className="px-8">
                <p className="py-4 min-w-fit w-50 md: md:max-w-4xl  text-lg">
                  Charla con la comunidad de RosChain "Bases de Solidity", donde
                  vimos una introduccion a la sintaxis del lenguaje para despues
                  deployar un smart contract en testnet!. <br />
                  <br /> Pero, ¿Que es Roschain? Es una comunidad en español que
                  se dedica a la educación y adopción de usuarios en el
                  ecosistema Web3 y cripto, bajo los valores de la
                  descentralización. <br /> <br /> Para obtener más información
                  sobre RosChain y cómo está organizado, haga clic en la imagen.
                </p>
                <div className="flex md:justify-center gap-2">
                  <div>
                    <a
                      target="_blank"
                      rel="noopener"
                      href="https://twitter.com/0xRoschain"
                    >
                      <Image
                        className="object-contain xl:max-w-5xl md:float-right rounded-lg"
                        alt="Logo"
                        src={charla1}
                      ></Image>
                    </a>
                  </div>
                </div>
              </div>
            </form>

            <form method="dialog" className="modal-backdrop">
              <button className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-2 py-2 my-4 rounded-md">
                close
              </button>
            </form>
          </dialog>

          {/* modal 2 */}
          <dialog
            id="my_modal_2"
            className="modal rounded-3xl justify-center dark:bg-slate-800 dark:text-white"
          >
            <form method="dialog" className="modal-box">
              <div className={styles.headerModal}>
                {/* <button className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-2 py-1.5 rounded-md ml-8 absolute right-2 top-2">
                ✕
              </button> */}
              </div>
              <div className="px-8">
                <p className="py-4 min-w-fit w-50 md: md:max-w-4xl  text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer ut enim a leo pulvinar rhoncus. Maecenas risus mauris,
                  interdum eu justo vitae, iaculis scelerisque magna. Vivamus eu
                  tincidunt augue. Sed eleifend eu lacus id porttitor. Proin
                  lorem risus, mollis nec orci et, tincidunt posuere arcu.
                  Vivamus non libero lacinia, ornare sem sed, mattis lorem.
                  Vivamus sed congue neque, non consectetur lectus. Donec
                  ultrices, ante quis maximus dignissim, massa nisl auctor quam,
                  quis molestie turpis odio a urna. Vivamus at libero malesuada,
                  suscipit mauris eget, faucibus arcu. Ut non lorem vel nibh
                  vehicula eleifend sit amet ornare massa.
                </p>
                <div className="flex md:justify-center gap-2">
                  <div>
                    <a
                      target="_blank"
                      rel="noopener"
                      href="https://twitter.com/0xRoschain"
                    >
                      <Image
                        className="object-contain xl:max-w-5xl md:float-right rounded-lg"
                        alt="Logo"
                        src={charla2}
                      ></Image>
                    </a>
                  </div>
                </div>
              </div>
            </form>
            <form method="dialog" className="modal-backdrop">
              <button className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-2 py-2 my-4 rounded-md">
                close
              </button>
            </form>
          </dialog>

          {/* modal 3 */}
          <dialog
            id="my_modal_3"
            className="modal rounded-3xl justify-center dark:bg-slate-800 dark:text-white"
          >
            <form method="dialog" className="modal-box">
              <div className={styles.headerModal}>
                {/* <button className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-2 py-1.5 rounded-md ml-8 absolute right-2 top-2">
                ✕
              </button> */}
              </div>
              <div className="px-8">
                <p className="py-4 min-w-fit w-50 md: md:max-w-4xl  text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer ut enim a leo pulvinar rhoncus. Maecenas risus mauris,
                  interdum eu justo vitae, iaculis scelerisque magna. Vivamus eu
                  tincidunt augue. Sed eleifend eu lacus id porttitor. Proin
                  lorem risus, mollis nec orci et, tincidunt posuere arcu.
                  Vivamus non libero lacinia, ornare sem sed, mattis lorem.
                  Vivamus sed congue neque, non consectetur lectus. Donec
                  ultrices, ante quis maximus dignissim, massa nisl auctor quam,
                  quis molestie turpis odio a urna. Vivamus at libero malesuada,
                  suscipit mauris eget, faucibus arcu. Ut non lorem vel nibh
                  vehicula eleifend sit amet ornare massa.
                </p>
                <div className="flex md:justify-center gap-2">
                  <div>
                    <a
                      target="_blank"
                      rel="noopener"
                      href="https://twitter.com/0xRoschain"
                    >
                      <Image
                        className="object-contain xl:max-w-5xl md:float-right rounded-lg"
                        alt="Logo"
                        src={charla3}
                      ></Image>
                    </a>
                  </div>
                </div>
              </div>
            </form>
            <form method="dialog" className="modal-backdrop">
              <button className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-2 py-2 my-4 rounded-md">
                close
              </button>
            </form>
          </dialog>

          {/* modal 4 */}
          <dialog
            id="my_modal_4"
            className="modal rounded-3xl justify-center dark:bg-slate-800 dark:text-white"
          >
            <form method="dialog" className="modal-box">
              <div className={styles.headerModal}>
                {/* <button className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-2 py-1.5 rounded-md ml-8 absolute right-2 top-2">
                ✕
              </button> */}
              </div>
              <div className="px-8">
                <p className="py-4 min-w-fit w-50 md: md:max-w-4xl  text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer ut enim a leo pulvinar rhoncus. Maecenas risus mauris,
                  interdum eu justo vitae, iaculis scelerisque magna. Vivamus eu
                  tincidunt augue. Sed eleifend eu lacus id porttitor. Proin
                  lorem risus, mollis nec orci et, tincidunt posuere arcu.
                  Vivamus non libero lacinia, ornare sem sed, mattis lorem.
                  Vivamus sed congue neque, non consectetur lectus. Donec
                  ultrices, ante quis maximus dignissim, massa nisl auctor quam,
                  quis molestie turpis odio a urna. Vivamus at libero malesuada,
                  suscipit mauris eget, faucibus arcu. Ut non lorem vel nibh
                  vehicula eleifend sit amet ornare massa.
                </p>
                <div className="flex md:justify-center gap-2">
                  <div>
                    <a
                      target="_blank"
                      rel="noopener"
                      href="https://twitter.com/0xRoschain"
                    >
                      <Image
                        className="object-contain xl:max-w-5xl md:float-right rounded-lg"
                        alt="Logo"
                        src={charla4}
                      ></Image>
                    </a>
                  </div>
                </div>
              </div>
            </form>
            <form method="dialog" className="modal-backdrop">
              <button className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-2 py-2 my-4 rounded-md">
                close
              </button>
            </form>
          </dialog>

          {/* modal 5 */}
          <dialog
            id="my_modal_5"
            className="modal rounded-3xl justify-center dark:bg-slate-800 dark:text-white"
          >
            <form method="dialog" className="modal-box">
              <div className={styles.headerModal}>
                {/* <button className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-2 py-1.5 rounded-md ml-8 absolute right-2 top-2">
                ✕
              </button> */}
              </div>
              <div className="px-8">
                <p className="py-4 min-w-fit w-50 md: md:max-w-4xl  text-lg">
                  Workshop sobre como configurar un Nodo de Ethereum utilizando
                  el software DAppNode desde como bootear el ISO en un pendrive
                  hasta la conexión local, Tandil (Prov. Bs As).
                </p>
                <div className="flex md:justify-center gap-2">
                  <div>
                    <a
                      target="_blank"
                      rel="noopener"
                      href="https://mirror.xyz/seedlatam.eth/VpuKM5vy2uWpK-H-MVGcbZaCIlRVoC3iTsASDDXIhTY"
                    >
                      <Image
                        className="object-contain xl:max-w-5xl md:float-right rounded-lg"
                        alt="Logo"
                        src={charla5}
                      ></Image>
                    </a>
                  </div>
                </div>
              </div>
            </form>
            <form method="dialog" className="modal-backdrop">
              <button className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-2 py-2 my-4 rounded-md">
                close
              </button>
            </form>
          </dialog>
        </div>

        <div className="py-1s text-black dark:text-white">
          <h2 className="text-4xl font-bold">Workshops</h2>
          <p className="text-xl py-10 leading-8">
            En este apartado podrás ver las diferentes charlas, presentaciones y
            talleres (workshops) que tuve la oportunidad de liderar
            {/* In this section you can see the different talks/presentations which
            I had the opportunity to lead */}
          </p>
        </div>
      </section>

      {/* SECTOR ARTICULOS */}

      <div className="min-h-screen md:grid-cols-2 text-center md:text-left">
        <div className="pt-20 pb-4 text-black dark:text-white">
          <h2 className="text-5xl font-bold e">Articulos</h2>
          <p className="text-xl py-10 leading-8 ">
            Todos los artículos técnicos en los cuales tuve el gusto de ser
            parte
          </p>
          {/* 
          english : All the technical and non-technical articles in which I had
             the pleasure of being part/author of them. */}
        </div>
        {/* ARTICULOS */}
        <div className="grid lg:grid-cols-3 gap-4 py-4s">
          {/* MAPEA LOS ARTICULOS */}
          {articulos.map((articulo) => (
            <div class="max-w-md rounded overflow-hidden shadow-lg dark:bg-slate-500">
              <a href={articulo.link} rel="noopener noreferrer" target="_blank">
                <img fill={true} className="w-full" src={articulo.img}></img>
                <div class="px-6 py-4 text-left">
                  <h1 className="font-bold dark:text-white">
                    {articulo.title}
                  </h1>
                  <p class="text-gray-700 text-base dark:text-gray-300">
                    {articulo.text}
                  </p>
                </div>
              </a>
            </div>
          ))}

          {/* Fin articulos */}
        </div>
      </div>
    </main>
  );
}
