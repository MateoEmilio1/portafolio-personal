import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin} from "react-icons/ai";
import Image from 'next/image';
import tute from '../../public/tutedev.png';

export default function Home() {
  return (
  <div>
    <Head>
      <title>Mateo Emilio Portafolio</title>
      <meta name="descripction"></meta>
    </Head>

    <main className="bg-white px-10">
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
          <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">Blockchain enthusiast lorem impsum 
          lorem impsum lorem impsum lorem impsum 
          lorem impsum lorem impsum lorem impsum  
          </p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
          <AiFillTwitterCircle/>
          <AiFillLinkedin/>
        </div>
      </section>
      <section className="min-h-screen">
        <div className="m-3.5 w-70">
            <Image className="rounded-full mt-5 max-w-xl float-right" src={tute}/>
            <div>
              <h2 className="text-5xl py-10 text-teal-500 font-bold">About me</h2>
              <p className="py-10 leading-8 text-gray-800 dark:text-gray-200 max-w-xl md:text-xl float-left">
              Blockchain enthusiast lorem impsum 
              lorem impsum lorem impsum lorem impsum 
              lorem impsum lorem impsum lorem impsum  
              </p>
            </div>
        </div>

      </section>
      <section className="bg-red-700 min-h-screen">
        <div >
           
        </div>

      </section>
    </main>
  </div>
  )
}
