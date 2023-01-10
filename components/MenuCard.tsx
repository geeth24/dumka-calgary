import React from "react";
interface MenuCardProps {
  title: string;
  type: string;
  price: number;
}

function MenuCard({ title, type }: MenuCardProps) {
  return (
    <div className="flex flex-col justify-between rounded-lg bg-beige p-6 shadow-lg">
      <p className="font-sm text-lightred">{type}</p>
      <h1 className="text-lg font-bold text-midred md:text-xl ">{title}</h1>
    </div>
  );
}

export default MenuCard;
