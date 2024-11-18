import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SiNextdotjs, SiTailwindcss, SiFramer } from "react-icons/si";
function Footer() {
  return (
    <footer className="rounded-lg p-4 px-[16px]  py-[13px] md:px-[4vw] lg:mt-5 lg:pt-[35px]">
      <div className="sm:flex sm:items-center sm:justify-between">
        <Link href="/" className=" flex items-center ">
          <Image
            src="/logo.png"
            className=" h-[60px] w-[160px]"
            alt="Dumka Logo"
            width={140}
            height={40}
          />
        </Link>

        <ul className="flex flex-wrap items-center text-sm text-navred ">
          <li>
            <Link href="/" className="mr-4 hover:underline md:mr-6 ">
              Home
            </Link>
          </li>
          <li>
            <Link href="/menu" className="mr-4 hover:underline md:mr-6">
              Menu
            </Link>
          </li>
          <li>
            <Link href="/catering" className="mr-4 hover:underline md:mr-6 ">
              Catering
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <hr className="my-3 border-midred sm:mx-auto lg:my-4" />
      <p className="mt-2 text-sm text-navred ">
        <Link href="tel:+1 825-540-4433" className="underline">
          +1 825-540-4433{" "}
        </Link>{" "}
        |{" "}
        <Link
          href="https://www.google.com/maps/search/?api=1&query=dumka indian cuisine calgary"
          className="underline"
        >
          2929 Sunridge Way NE #102, Calgary
        </Link>
      </p>
      <span className="block text-sm text-navred ">
        Dumka Calgary © {new Date().getFullYear()}
      </span>
      <span className="block text-sm text-navred">
        Built by{" "}
        <span className=" text-sm text-navred underline">
          <Link href="https://geethg.com" className="text-navred">
            Geeth
          </Link>
        </span>
      </span>
    </footer>
  );
}

export default Footer;
