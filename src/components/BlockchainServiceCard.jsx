import React from "react";
import { bulb } from "../assets/images";

const BlockchainServiceCard = ({ className, image, text }) => {
  return (
    <div
      className={`${className} flex h-92 w-80 cursor-pointer flex-col items-center justify-center gap-10 rounded-2xl bg-linear-to-b p-10 duration-300`}
    >
      <img className="w-20" src={image} alt="image" />
      <h2 className="text-center text-4xl text-white font-semibold">{text}</h2>
    </div>
  );
};

export default BlockchainServiceCard;
