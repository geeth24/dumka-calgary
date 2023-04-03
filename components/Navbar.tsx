import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Link as RLink } from "react-scroll";
export default function Navbar() {
  const [isMenu, setIsMenu] = useState(false);
  const router = useRouter();
  const { pathname } = router;

  return (
    <nav
      className={`fixed top-0 left-0 z-10 flex w-full flex-row bg-beige/50 py-[13px] px-[16px] text-[#222222] backdrop-blur-3xl md:px-[4vw] lg:-mt-5 lg:pt-[35px] ${
        isMenu
          ? "h-screen items-start bg-transparent"
          : "h-auto items-center bg-transparent"
      }`}
    >
      <Link
        className={`flex flex-row items-center  justify-center space-x-2 
      ${isMenu ? "hidden lg:flex" : "flex-row"}`}
        href="/"
      >
        <Image src="/halal.png" width={40} height={40} alt="" className="" />
        <Image
          src="/logo.png"
          width={160}
          height={40}
          alt=""
          className="h-15"
        />{" "}
      </Link>
      <div
        className={`fixed top-0 left-0 flex h-screen w-screen flex-col gap-[40px] px-[59px] pt-[100px] text-left text-[45px] font-bold text-midred transition-all duration-300  lg:hidden lg:-translate-x-[78px] lg:px-0 ${
          !isMenu && "pointer-events-none -z-50 -translate-y-20 opacity-0"
        } ${isMenu && "-z-10"}`}
      >
        <Link
          className="w-full border-b-2 border-darkred/10 hover:text-midred"
          href="/"
          onClick={() => {
            setIsMenu(false);
          }}
        >
          Home
        </Link>
        <Link
          className="w-full border-b-2 border-darkred/10 hover:text-midred"
          href="/menu"
          onClick={() => {
            setIsMenu(false);
          }}
        >
          Menu
        </Link>
        <Link
          className="w-full border-b-2 border-darkred/10 hover:text-midred"
          href="/catering"
          onClick={() => {
            setIsMenu(false);
          }}
        >
          Catering
        </Link>
        <Link
          className="w-full border-b-2 border-darkred/10 hover:text-midred"
          href="/contact"
          onClick={() => {
            setIsMenu(false);
          }}
        >
          Contact
        </Link>
      </div>

      <div className="flex flex-row items-center justify-center gap-[47px] text-darkred  lg:ml-auto ">
        <Link
          className={`hidden cursor-pointer text-[14.7px] font-semibold transition-all duration-300 hover:text-midred lg:block lg:text-[16px] ${
            pathname === "/" && "text-navred"
          }`}
          href="/"
        >
          Home
        </Link>
        <Link
          className={`hidden cursor-pointer text-[14.7px] font-semibold transition-all duration-300 hover:text-midred lg:block lg:text-[16px] ${
            pathname === "/menu" && "text-navred"
          }`}
          href="/menu"
        >
          Menu
        </Link>
        <Link
          className={`hidden cursor-pointer text-[14.7px] font-semibold transition-all duration-300 hover:text-midred lg:block lg:text-[16px] ${
            pathname === "/catering" && "text-navred"
          }`}
          href="/catering"
        >
          Catering
        </Link>
      </div>
      {!isMenu && (
        <Link
          className="ml-auto mr-[20px] flex   flex-col  items-center justify-center  rounded-full bg-midred  px-[20px]  py-[6px] text-[16px] font-semibold text-buttonbeige transition-all duration-300 active:scale-95 lg:ml-10"
          href="/contact"
          onClick={() => {
            setIsMenu(false);
          }}
        >
          Contact
        </Link>
      )}
      <div
        className={`group z-50    flex cursor-pointer flex-col items-center justify-center rounded-full   bg-midred transition-all duration-300 lg:ml-10 lg:hidden ${
          isMenu && " ml-auto"
        }`}
        onClick={() => {
          setIsMenu(!isMenu);
        }}
      >
        <div
          className={`group z-50  flex cursor-pointer flex-col items-center justify-center gap-[3px]  rounded-full bg-transparent  px-[12px] py-[12px] text-darkred transition-all duration-300 active:bg-transparent lg:hidden lg:hover:bg-transparent ${
            isMenu && " bg-beige"
          }`}
        >
          <div
            className={`h-[2px] w-[13.81px] rounded-full bg-beige transition-all duration-300 lg:group-hover:bg-transparent ${
              isMenu && "translate-y-[4.5px] -rotate-45 bg-beige"
            }`}
          />
          <div
            className={`h-[2px] w-[13.81px] rounded-full bg-beige transition-all duration-300 lg:group-hover:bg-transparent ${
              isMenu && "rotate-45 bg-beige"
            }`}
          />
          <div
            className={`h-[2px] w-[13.81px] rounded-full bg-beige transition-all duration-300 lg:group-hover:bg-transparent ${
              isMenu && "-translate-y-[6px] rotate-45 bg-beige"
            }`}
          />
        </div>
      </div>
    </nav>
  );
}
