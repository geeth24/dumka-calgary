import React from "react";
interface MenuCardProps {
  [key: string]: any;
  title: string;
  type: string;
  price: number;
}

function MenuCard({ title, type, price }: MenuCardProps) {
  return (
    <div className="flex flex-col justify-between rounded-lg bg-beige p-6 shadow-lg">
      {price === null ||
        (price != 0 && (
          <div className="flex w-full flex-row items-end justify-end">
            <div className="flex h-8 w-20 flex-col items-center justify-center rounded-full bg-darkred">
              <p className="text-base text-beige">${price}</p>
            </div>
          </div>
        ))}
      <p className="font-sm text-lightred">{type}</p>
      <h1 className="text-lg font-bold text-midred md:text-xl ">{title}</h1>
    </div>
  );
}

export default MenuCard;
