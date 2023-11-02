import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
// Imagenes
import Image from "next/image";
import tute from "../../public/tutedev.png";
import tute2 from "../../public/tutedev2.png";
import proyecto1 from "../../public/images/screenCuantosDolares.png";

//Datos
import articulos from "./articulos.js";
import NavBar from "./navbar.js"
//CSS
import CarruselWorkshops from "./carruselWorkshops";

export default function Home({ Component, pageProps }) {

  return (
    <main className="bg-white px-10 dark:bg-slate-800">
      {/* SECTOR PRINCIPAL */}

      <div className="min-h-screen">
        
        <NavBar/>

        <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-teal-500 font-bold">
            Mateo Emilio
          </h2>
          <h3 className="text-2xl py-2 font-semibold dark:text-white">
            Estudiante de Ing. en Sistemas
            {/* Systems engineering student */}
          </h3>
          <h3 className="text-xl py-2 font-semibold dark:text-white">
            Frontend Developer
          </h3>
          <p className="text-md py-5 leading-8 text-gray-800 max-w-xl mx-auto md:text-xl dark:text-white">
            Entusiasta sobre la tecnologia Blockchain, explorando paso a paso el
            mundo del desarrollo, lee más sobre mí a continuación!
            {/* Blockchain Enthusiast and coding passionate, studying and learning
            every day what I love, read more about me below! */}
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
      <div className="grid gap-8 min-h-screen py-52 justify-center text-center md:text-center">
        {/* PARTE DERECHA */}

        <div className=" text-black dark:text-white  ">
          <h2 className="text-6xl font-bold pb-10">Proyectos</h2>
          <p className="text-2xl pb-14 leading-8">
            Proyectos personales en los cuales practico mis habilidades para
            luego aplicarlos en el ambito laboral.
          </p>
          {/* PROYECTOS */}
          {/* CALCULADORA DE DOLARES */}
          <div className="sm:items-center md:mx-20 xl:mx-40 border-2 border-gray-400 dark:border-white rounded-md">
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
                  href="https://www.cuantosdolarestengo.com.ar/"
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
          {/* termina calc */}
        </div>

        {/* Fin PROYECTOS */}
      </div>

      {/* SECTOR ABOUT ME */}

      <section className="grid gap-8 min-h-screen md:grid-cols-2 text-center md:text-left">
        <div className="py-20 text-black dark:text-white">
          <h2 className="text-5xl font-bold">Sobre mí</h2>
          <p className="text-xl py-10 leading-8 ">
            Estudiante de Ing. en Sistemas avanzado en UTN FRRO, trabajé como
            Community Builder en{" "}
            <a
              href="https://twitter.com/auroraisnear"
              className="text-green-600 font-bold bg-green-200  rounded-md px-2"
              target="_blank"
              rel="noopener"
            >
              Aurora
            </a>{" "}
            (ago/2022 - jul/2023) especificamente en la comunidad de Latam, actualmente estoy
            trabajando como Desarrollador en{" "}
            <a
              href="https://seedlatam.org/"
              className="text-violet-700 font-bold bg-violet-200 rounded-md px-2"
              target="_blank"
              rel="noopener"
            >
              Seed Latam
            </a>
            &nbsp; desde Julio 2023.
            {/* Advanced systems engineering student at UTN FRRO, I began my career
            path within the tech world in the Aurora Latam community (L2 of NEAR
            Protocol) doing research and teaching the foundations of the
            blockchain world through courses and talks, there I had the
            opportunity to travel to Lima, Peru on behalf of Aurora. After
            almost 1 year I made the decision to move forward on my path and
            today I am lucky to be currently working as a Developer at SEED
            Latam, the largest community in Latin America of the Ethereum
            blockchain. PD: I love trekking! */}
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
            <CarruselWorkshops/>
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
