import React from "react";
import Button from "./Button";
import {MoveRight, MoveUpRight} from 'lucide-react'

const ServicesFeaturesCard = ({ id, heading, desc, tag, buttonText }) => {
  return (
    <div className="flex gap-5 rounded-2xl border-4 border-gray-300 p-10">
      {/* LEFT DIV   */}
      <div className="flex basis-1/2 gap-5">
        {/* LEFT */}
        <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-gray-200 p-4 text-4xl">
          {id}.
        </div>

        {/* RIGHT  */}
        <div className="flex basis-1/2 flex-col gap-2 flex-1">
          <p className="text-gray-400">{tag}</p>
          <h1 className="text-4xl font-bold text-purple-700">{heading}</h1>
          <Button text={buttonText} className={"mt-7 self-start"} />
        </div>
      </div>

      {/* RIGHT DIV  */}
      <div className="flex gap-6 basis-1/2">
        <div className="flex flex-col flex-1">
            <p className="text-gray-500 leading-10 text-lg ">{desc}</p>
            <div className="flex gap-3 items-center text-purple-700"><a className="text-lg font-bold" href="">Learn More </a><MoveRight size={24} strokeWidth={2.25} /> </div>
        </div>
        <div>
            <MoveUpRight size={32} strokeWidth={2.75} />
        </div>

      </div>
    </div>
  );
};

export default ServicesFeaturesCard;
