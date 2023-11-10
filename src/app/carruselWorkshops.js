"use client";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
//Datos
import workshops from "./workshops";
//CSS
import styles from "../app/globals.css";
//Imagenes
import Image from "next/image";
import charla1 from "../../public/images/charla1.png";
import charla2 from "../../public/images/charla2.png";
import charla3 from "../../public/images/charla3.png";
import charla4 from "../../public/images/charla4.png";
import charla5 from "../../public/images/charla5.jpg";

export default function CarruselWorkshops() {
  return (
    <div id="Page" className="sm:items-center">
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
              <br /> Pero, ¿Que es Roschain? Es una comunidad en español que se
              dedica a la educación y adopción de usuarios en el ecosistema Web3
              y cripto, bajo los valores de la descentralización. <br /> <br />{" "}
              Para obtener más información sobre RosChain y cómo está
              organizado, haga clic en la imagen.
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
            <p className="py-4 min-w-fit w-50  lg:pl-36 md:max-w-4xl  text-lg">
              Explicacion de como funciona Aurora dentro del ecosistema de NEAR Protocol
              <br /> <br />{" "}
              Lima, Perú
            </p>
            <div className="flex md:justify-center gap-2">
              <div>
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://twitter.com/auroraisnear"
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
            <p className="py-4 min-w-fit w-50  lg:pl-36 md:max-w-4xl  text-lg">
              Workshop como deployar smart contracts dentro de Aurora
              <br /> <br />{" "}
              Lima, Perú
            </p>
            <div className="flex md:justify-center gap-2">
              <div>
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://twitter.com/auroraisnear"
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
            <p className="py-4 min-w-fit w-50  lg:pl-36 md:max-w-4xl  text-lg">
            Workshop como deployar smart contracts dentro de Aurora
              <br /> <br />{" "}
              Lima, Perú
            </p>
            <div className="flex md:justify-center gap-2">
              <div>
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://twitter.com/auroraisnear"
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
              Workshop sobre como configurar un Nodo de Ethereum utilizando el
              software DAppNode desde como bootear el ISO en un pendrive hasta
              la conexión local, Tandil (Prov. Bs As).
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
  );
}
