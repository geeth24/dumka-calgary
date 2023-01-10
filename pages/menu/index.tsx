import { GetServerSideProps } from "next";
import React from "react";
import MenuCard from "../../components/MenuCard";
import { sanityClient } from "../../sanity";
import { MenuCollection } from "../../typings";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  AdjustmentsVerticalIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-scroll";

interface MenuProps {
  collections: MenuCollection;
}
function Menu({ collections }: MenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="h-full bg-opacity-10 bg-[url('/bg/menu.png')] bg-cover bg-center bg-no-repeat">
        <div className="mx-auto  max-w-screen-xl px-8 py-24 md:px-16  ">
          <AdjustmentsVerticalIcon
            className="fixed right-0 bottom-0 m-10 h-10 w-10 cursor-pointer rounded-full bg-darkred p-2 text-beige"
            onClick={() => setOpen(true)}
          />
          <h1 className="mb-8 mt-8 max-w-2xl text-4xl font-black  text-darkred md:text-5xl xl:text-6xl">
            Menu
          </h1>
          <div id="appetizerssides" className="mb-8">
            <h6 className="mb-8 max-w-2xl text-2xl font-bold text-midred md:text-3xl xl:text-4xl">
              Appetizers & Sides
            </h6>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {collections.appetizerssides.map((item, index) => (
                <MenuCard
                  key={index}
                  title={item.title}
                  type={item.type}
                  price={item.price}
                />
              ))}
            </div>
          </div>
          <div id="entrees" className="mb-8">
            <h6 className="mb-8 max-w-2xl text-2xl font-bold text-midred md:text-3xl xl:text-4xl">
              Entrees
            </h6>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {collections.entrees.map((item, index) => (
                <MenuCard
                  key={index}
                  title={item.title}
                  type={item.type}
                  price={item.price}
                />
              ))}
            </div>
          </div>
          <div id="ricedish" className="mb-8">
            <h6 className="mb-8 max-w-2xl text-2xl font-bold text-midred md:text-3xl xl:text-4xl">
              Rice Dishes
            </h6>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {collections.ricedish.map((item, index) => (
                <MenuCard
                  key={index}
                  title={item.title}
                  type={item.type}
                  price={item.price}
                />
              ))}
            </div>
          </div>
          <div id="noodles" className="mb-8">
            <h6 className="mb-8 max-w-2xl text-2xl font-bold text-midred md:text-3xl xl:text-4xl">
              Noodles
            </h6>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {collections.noodles.map((item, index) => (
                <MenuCard
                  key={index}
                  title={item.title}
                  type={item.type}
                  price={item.price}
                />
              ))}
            </div>
          </div>
          <div id="bread" className="mb-8">
            <h6 className="mb-8 max-w-2xl text-2xl font-bold text-midred md:text-3xl xl:text-4xl">
              Bread
            </h6>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {collections.bread.map((item, index) => (
                <MenuCard
                  key={index}
                  title={item.title}
                  type={item.type}
                  price={item.price}
                />
              ))}
            </div>
          </div>
          <div id="kids" className="mb-8">
            <h6 className="mb-8 max-w-2xl text-2xl font-bold text-midred md:text-3xl xl:text-4xl">
              Kids
            </h6>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {collections.kids.map((item, index) => (
                <MenuCard
                  key={index}
                  title={item.title}
                  type={item.type}
                  price={item.price}
                />
              ))}
            </div>
          </div>
          <div id="breakfast" className="mb-8">
            <h6 className="mb-8 max-w-2xl text-2xl font-bold text-midred md:text-3xl xl:text-4xl">
              Breakfast
            </h6>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {collections.breakfast.map((item, index) => (
                <MenuCard
                  key={index}
                  title={item.title}
                  type={item.type}
                  price={item.price}
                />
              ))}
            </div>
          </div>
          <div id="kebabstandoor" className="mb-8">
            <h6 className="mb-8 max-w-2xl text-2xl font-bold text-midred md:text-3xl xl:text-4xl">
              Kebabs & Tandoor
            </h6>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {collections.kebabstandoor.map((item, index) => (
                <MenuCard
                  key={index}
                  title={item.title}
                  type={item.type}
                  price={item.price}
                />
              ))}
            </div>
          </div>
          <div id="desserts" className="mb-8">
            <h6 className="mb-8 max-w-2xl text-2xl font-bold text-midred md:text-3xl xl:text-4xl">
              Desserts
            </h6>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {collections.desserts.map((item, index) => (
                <MenuCard
                  key={index}
                  title={item.title}
                  type={item.type}
                  price={item.price}
                />
              ))}
            </div>
          </div>
          <div id="drinks" className="mb-8">
            <h6 className="mb-8 max-w-2xl text-2xl font-bold text-midred md:text-3xl xl:text-4xl">
              Drinks
            </h6>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {collections.drinks.map((item, index) => (
                <MenuCard
                  key={index}
                  title={item.title}
                  type={item.type}
                  price={item.price}
                />
              ))}
            </div>
          </div>
          <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="  " onClose={setOpen}>
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 z-20 mt-16 bg-beige/50 bg-opacity-75 backdrop-blur-lg transition-opacity lg:mt-24" />
              </Transition.Child>

              <div className="fixed inset-0 z-40  overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                  <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                    <Transition.Child
                      as={Fragment}
                      enter="transform transition ease-in-out duration-500 sm:duration-700"
                      enterFrom="translate-x-full"
                      enterTo="translate-x-0"
                      leave="transform transition ease-in-out duration-500 sm:duration-700"
                      leaveFrom="translate-x-0"
                      leaveTo="translate-x-full"
                    >
                      <Dialog.Panel className="pointer-events-auto mt-16 w-screen max-w-md lg:mt-24">
                        <div className="flex h-full flex-col overflow-y-scroll bg-beige py-6 shadow-xl">
                          <div className="px-4 sm:px-6">
                            <div className="flex items-start justify-between">
                              <Dialog.Title className="text-lg font-medium text-darkred">
                                Scroll Through Menu
                              </Dialog.Title>
                              <div className="ml-3 flex h-7 items-center">
                                <button
                                  type="button"
                                  onClick={() => setOpen(false)}
                                  className="rounded-md text-midred hover:text-darkred focus:outline-none focus:ring-2 focus:ring-lightred"
                                >
                                  <span className="sr-only">Close panel</span>
                                  <XMarkIcon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className=" mt-6 flex-1 px-4 sm:px-6 ">
                            <Link
                              to="appetizerssides"
                              smooth={true}
                              duration={500}
                              spy={true}
                              offset={-140}
                              className=" cursor-pointer text-2xl font-medium text-darkred hover:text-midred  "
                              onClick={() => setOpen(false)}
                            >
                              Appetizers & Sides
                            </Link>
                            <hr className="mb-6 border-darkred/10 " />

                            <Link
                              to="entrees"
                              smooth={true}
                              duration={500}
                              spy={true}
                              offset={-140}
                              className=" cursor-pointer text-2xl font-medium text-darkred hover:text-midred"
                              onClick={() => setOpen(false)}
                            >
                              Entrees
                            </Link>
                            <hr className="mb-6 border-darkred/10 " />
                            <Link
                              to="ricedish"
                              smooth={true}
                              duration={500}
                              spy={true}
                              offset={-140}
                              className=" cursor-pointer text-2xl font-medium text-darkred hover:text-midred"
                              onClick={() => setOpen(false)}
                            >
                              Rice Dishes
                            </Link>
                            <hr className="mb-6 border-darkred/10 " />
                            <Link
                              to="noodles"
                              smooth={true}
                              duration={500}
                              spy={true}
                              offset={-140}
                              className=" cursor-pointer text-2xl font-medium text-darkred hover:text-midred"
                              onClick={() => setOpen(false)}
                            >
                              Noodles
                            </Link>
                            <hr className="mb-6 border-darkred/10 " />
                            <Link
                              to="bread"
                              smooth={true}
                              duration={500}
                              spy={true}
                              offset={-140}
                              className=" cursor-pointer text-2xl font-medium text-darkred hover:text-midred"
                              onClick={() => setOpen(false)}
                            >
                              Bread
                            </Link>
                            <hr className="mb-6 border-darkred/10 " />
                            <Link
                              to="kids"
                              smooth={true}
                              duration={500}
                              spy={true}
                              offset={-140}
                              className=" cursor-pointer text-2xl font-medium text-darkred hover:text-midred"
                              onClick={() => setOpen(false)}
                            >
                              Kids
                            </Link>
                            <hr className="mb-6 border-darkred/10 " />
                            <Link
                              to="breakfast"
                              smooth={true}
                              duration={500}
                              spy={true}
                              offset={-140}
                              className=" cursor-pointer text-2xl font-medium text-darkred hover:text-midred"
                              onClick={() => setOpen(false)}
                            >
                              Breakfast
                            </Link>
                            <hr className="mb-6 border-darkred/10 " />
                            <Link
                              to="kebabstandoor"
                              smooth={true}
                              duration={500}
                              spy={true}
                              offset={-140}
                              className=" cursor-pointer text-2xl font-medium text-darkred hover:text-midred"
                              onClick={() => setOpen(false)}
                            >
                              Kebabs & Tandoor
                            </Link>
                            <hr className="mb-6 border-darkred/10 " />
                            <Link
                              to="desserts"
                              smooth={true}
                              duration={500}
                              spy={true}
                              offset={-140}
                              className=" cursor-pointer text-2xl font-medium text-darkred hover:text-midred"
                              onClick={() => setOpen(false)}
                            >
                              Desserts
                            </Link>
                            <hr className="mb-6 border-darkred/10 " />
                            <Link
                              to="drinks"
                              smooth={true}
                              duration={500}
                              spy={true}
                              offset={-140}
                              className=" cursor-pointer text-2xl font-medium text-darkred hover:text-midred"
                              onClick={() => setOpen(false)}
                            >
                              Drinks
                            </Link>
                            <hr className="mb-6 border-darkred/10 " />
                          </div>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </div>
            </Dialog>
          </Transition.Root>
        </div>
      </section>
    </>
  );
}

export default Menu;

export const getServerSideProps: GetServerSideProps = async () => {
  const query = `
    {
  "appetizerssides": *[_type == "appetizerssides"]{
    _id,
    title,
    type,
    price,
   },
  "bread": *[_type == 'bread']{
    _id,
    title,
    type,
    price,
   },
    "breakfast": *[_type == 'breakfast']{
    _id,
    title,
    type,
    price,
   },
      "desserts": *[_type == 'desserts']{
    _id,
    title,
    type,
    price,
   },
      "drinks": *[_type == 'drinks']{
    _id,
    title,
    type,
    price,
   },
      "entrees": *[_type == 'entrees']{
    _id,
    title,
    type,
    price,
   },
      "kebabstandoor": *[_type == 'kebabstandoor']{
    _id,
    title,
    type,
    price,
   },
       "kids": *[_type == 'kids']{
    _id,
    title,
    type,
    price,
   },
       "noodles": *[_type == 'noodles']{
    _id,
    title,
    type,
    price,
   },
       "ricedish": *[_type == 'ricedish']{
    _id,
    title,
    type,
    price,
   }
}
`;

  const collections = await sanityClient.fetch(query).catch((err) => {
    console.log(err);
  });
  console.log(collections);
  return {
    props: {
      collections,
    },
  };
};
