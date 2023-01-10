import { motion } from "framer-motion";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Modal from "../components/Modal";
import { sanityClient, urlFor } from "../sanity";
import { HomeData } from "../typings";
interface Props {
  homeData: HomeData;
}
export default function Home({ homeData }: Props) {
  const [open, setOpen] = useState(homeData.enableModal);
  return (
    <>
      <Head>
        <title>Dumka Calgary</title>
      </Head>
      <Modal
        open={open}
        setOpen={setOpen}
        title={homeData.modalTitle}
        description={homeData.modalDescription}
      />
      <section className="h-full bg-opacity-10 bg-[url('/bg/hero.png')] bg-cover bg-center bg-no-repeat">
        <div className="mx-auto grid max-w-screen-xl overflow-hidden px-8 py-24 md:px-16 lg:grid-cols-12 lg:gap-8 lg:py-32 xl:gap-0">
          <div className="mr-auto place-self-center lg:col-span-5">
            <h1 className="mb-4 max-w-2xl text-4xl font-bold  text-midred md:text-5xl xl:text-6xl">
              {homeData.title} <br />
              {homeData.firstSubtitle} <br />
              {homeData.secondSubtitle} <br />
              {homeData.thirdSubtitle}
            </h1>
            <p className="mb-6 max-w-2xl font-light text-lightred md:text-lg lg:mb-8 lg:text-lg">
              {homeData.description}
            </p>

            <Link
              href="/menu"
              className="inline-flex items-center justify-center rounded-full border border-transparent bg-midred px-16 py-2 text-base font-medium text-white shadow-sm transition-all duration-300 ease-in-out hover:bg-darkred active:scale-95 "
            >
              Menu
            </Link>
          </div>
          <div className=" lg:col-span-7 lg:mt-0 lg:flex">
            <motion.img
              src={urlFor(homeData.homeImage).url()}
              alt="mockup"
              className="h-full w-full object-cover"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const querey = `
    *[_type == "home"][0]{
        _id,
        title,
        firstSubtitle,
        secondSubtitle,
        thirdSubtitle,
        description,
        enableModal,
        modalTitle,
        modalDescription,
        homeImage{
          asset
        },
       
}
`;
  const homeData = await sanityClient.fetch(querey);
  return {
    props: {
      homeData,
    },
  };
};
