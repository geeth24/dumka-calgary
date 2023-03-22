import Link from "next/link";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";

function Contact() {
  return (
    <>
      <section className="min-h-screen bg-opacity-10 bg-[url('/bg/contact.png')] bg-cover bg-center bg-no-repeat">
        <div className="mx-auto  max-w-screen-xl px-8 py-24 md:px-16  ">
          <h1 className="mb-8 mt-8 max-w-2xl text-4xl font-black  text-darkred md:text-5xl xl:text-6xl">
            Contact
          </h1>
          <div className="relative isolate overflow-hidden  rounded-3xl bg-beige px-6 pt-16 shadow-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2"
              aria-hidden="true"
            >
              <circle
                cx={512}
                cy={512}
                r={512}
                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient
                  id="759c1415-0410-454c-8f7c-9a820de03641"
                  cx={0}
                  cy={0}
                  r={1}
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(512 512) rotate(90) scale(512)"
                >
                  <stop stopColor="#BF7D81" />
                  <stop offset={1} stopColor="#6B010A" stopOpacity={0} />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left ">
              <h2 className="text-3xl font-bold tracking-tight text-midred sm:text-4xl">
                Contact us
                <br />
                via Phone
                <br />
                <span className="text-xl text-midred">
                  Or walk into our restaurant
                </span>
                <br />
                <span className="text-xl text-darkred">Closed on Monday</span>
                <br />
                <span className="text-xl text-midred">
                  Open Tuesday - Sunday <br />{" "}
                  <span className="text-xl text-darkred">
                    from 12:00 PM - 10:00 PM
                  </span>
                </span>
              </h2>

              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <Link
                  href="tel:+1 825-853-9990"
                  className="mr-3 rounded-full bg-darkred px-5 py-2.5 text-center text-sm font-medium text-beige shadow md:mr-0"
                >
                  <div className="flex items-center gap-x-2">
                    <FaPhoneAlt />
                    Phone
                  </div>
                </Link>
                <Link
                  href="https://www.google.com/maps/search/?api=1&query=dumka indian cuisine calgary"
                  className="text-base font-semibold leading-7 text-midred"
                >
                  2929 Sunridge Way NE #102 <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/herodish.png"
                alt="Dumka Hero Dish"
                width={500}
                height={500}
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
