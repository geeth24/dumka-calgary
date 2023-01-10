import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SiNextdotjs, SiTailwindcss, SiFramer } from "react-icons/si";
function Footer() {
  return (
    <footer className="rounded-lg p-4 py-[13px]  px-[16px] md:px-[4vw] lg:mt-5 lg:pt-[35px]">
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
      <p className="mt-2 text-sm text-navred sm:text-center">
        <Link href="tel:+1 825-853-9990" className="underline">
          +1 825-853-9990{" "}
        </Link>{" "}
        |{" "}
        <Link
          href="https://www.google.com/maps/search/?api=1&query=dumka indian cuisine calgary"
          className="underline"
        >
          2929 Sunridge Way NE #102, Calgary, AB
        </Link>
      </p>
      <span className="block text-sm text-navred sm:text-center">
        © {new Date().getFullYear()} Dumka Calgary. All rights reserved.
      </span>
      <span className="block text-sm text-navred sm:text-center">
        Built with{" "}
        <Link href="https://nextjs.org/" className="hover:underline">
          <SiNextdotjs className="inline-block h-4 w-4" />
        </Link>{" "}
        <Link href="https://tailwindcss.com/" className="hover:underline">
          <SiTailwindcss className="inline-block h-4 w-4" />
        </Link>{" "}
        <Link href="https://www.framer.com/motion/" className="hover:underline">
          <SiFramer className="inline-block h-4 w-4" />
        </Link>{" "}
        by{" "}
        <Link href="https://geethg.com" className="underline">
          Geeth Gunnampalli
        </Link>
      </span>
    </footer>
  );
}

export default Footer;
