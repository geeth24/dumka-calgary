import { GetServerSideProps } from "next";
import MenuCard from "../../components/MenuCard";
import { sanityClient } from "../../sanity";
import { MenuCollection } from "../../typings";
import { Link } from "react-scroll";
import { items } from "../../menu.config";

interface MenuProps {
  collections: MenuCollection;
}
function Menu({ collections }: MenuProps) {
  return (
    <>
      <section className="h-full bg-opacity-10 bg-[url('/bg/menu.png')] bg-cover bg-center bg-no-repeat">
        <div className="fixed top-0  flex w-full flex-row items-center space-x-5 overflow-hidden overflow-x-scroll bg-beige/50 pb-5 pr-5 pl-5 pt-20 backdrop-blur-3xl md:pt-24  xl:justify-center">
          {items.map((item, index) => (
            <Link
              key={index}
              to={item}
              smooth={true}
              duration={800}
              spy={true}
              offset={-180}
              className={`${
                collections[
                  item.toLowerCase().replace(/\s/g, "") === "breads"
                    ? "bread"
                    : item.toLowerCase().replace(/\s/g, "")
                ]?.length === 0
                  ? "hidden"
                  : "block"
              } text-md truncate-2-lines cursor-pointer text-center font-medium text-darkred transition duration-300 ease-in-out hover:text-midred`}
            >
              {collections[
                item.toLowerCase().replace(/\s/g, "") === "breads"
                  ? "bread"
                  : item.toLowerCase().replace(/\s/g, "")
              ]?.length === 0
                ? null
                : item}
            </Link>
          ))}
          <hr className="mb-6 border-darkred/10" />
        </div>
        <div className="mx-auto  max-w-screen-xl px-8 py-52 md:px-16 md:py-64 ">
          <h1 className="mb-8 mt-8 max-w-2xl text-4xl font-black  text-darkred md:text-5xl xl:text-6xl">
            Menu
          </h1>

          {items.map((item, index) => (
            <div id={item} className="mb-8" key={index}>
              {collections[
                item.toLowerCase().replace(/\s/g, "") === "breads"
                  ? "bread"
                  : item.toLowerCase().replace(/\s/g, "")
              ]?.length === 0 ? null : (
                <h6 className="mb-8 max-w-2xl text-xl font-bold text-midred md:text-3xl xl:text-4xl">
                  {item}
                </h6>
              )}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {collections[
                  item.toLowerCase().replace(/\s/g, "") === "breads"
                    ? "bread"
                    : item.toLowerCase().replace(/\s/g, "")
                ]?.map((menuItem: any, index: number) => (
                  <MenuCard
                    key={index}
                    title={menuItem.title}
                    type={menuItem.type}
                    price={menuItem.price}
                  >
                    {item}
                  </MenuCard>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Menu;

export const getServerSideProps: GetServerSideProps = async () => {
  const query2 = `
 { 
  ${items.map((item) => {
    let itemType = item.toLowerCase().replace(/\s/g, "");
    if (itemType === "vegappetizers") {
      return `"${itemType}": *[_type == 'VegAppetizers']{
      _id,
      title,
      type,
      price,
      }`;
    } else if (itemType === "nonvegappetizers") {
      return `"${itemType}": *[_type == 'NonVegAppetizers']{
      _id,
      title,
      type,
      price,
      }`;
    } else if (itemType === "breads") {
      return `"bread": *[_type == 'bread']{
      _id,
      title,
      type,
      price,
      }`;
    } else {
      return `"${itemType}": *[_type == '${itemType}']{
      _id,
      title,
      type,
      price,
      }`;
    }
  })}

}
`;

  const collections = await sanityClient.fetch(query2).catch((err) => {
    console.log(err);
  });
  console.log(collections);
  return {
    props: {
      collections,
    },
  };
};
