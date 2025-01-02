import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  // check shadow with use eventlistener scroll arrow Y by useEffect
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 100) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  });
  return (
    <div
      className={`${
        shadow ? "shadow-xl shadow-slate-900" : ""
      } fixed right-0 px-[30px] md:px-[100px] bg-black-2 h-[70px] md:h-[100px] w-full z-[1000] flex items-center justify-between text-white`}
    >
      <div className="font-poppins font-bold text-[24px]">
        SMK Taruna Budi Bangsa
      </div>
      <ul
        className={`${
          nav ? "top-[70px" : "top-[-490px]"
        } md:flex gap-2 md:pb-0 pb-12 px-[30px] absolute md:static md:z-auto z-[100] bg-black-2 left-0 w-full md:w-auto transition-all duration-300 ease-in`}
      >
        <li className="bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] hover:text-transparent bg-clip-text xl:hover:scale-110 cursor-pointer p-2">
          <a href="">Beranda</a>
        </li>
        <li className="bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] hover:text-transparent bg-clip-text xl:hover:scale-110 cursor-pointer p-2">
          <a href="">Profil</a>
        </li>
        <li className="bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] hover:text-transparent bg-clip-text xl:hover:scale-110 cursor-pointer p-2">
          <a href="">Konsentrasi Keahlian</a>
        </li>
        <li className="bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] hover:text-transparent bg-clip-text xl:hover:scale-110 cursor-pointer p-2">
          <a href="">Tenaga Kerja</a>
        </li>
        <li className="bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] hover:text-transparent bg-clip-text xl:hover:scale-110 cursor-pointer p-2">
          <a href="">Ekstrakurikuler</a>
        </li>
      </ul>
      <div
        className="flex xl:hidden tex-2xl font-bold"
        onClick={() => setNav(!nav)}
      >
        {nav ? <IoClose /> : <AiOutlineMenu />}
      </div>
    </div>
  );
};

export default Navbar;
