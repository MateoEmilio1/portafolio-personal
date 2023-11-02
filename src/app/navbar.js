"use client";


export default function NavBar() {

    const changeDarkMode = () => {
        document.documentElement.classList.toggle("dark");
      };

    return(
   
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



    );



}