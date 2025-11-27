import React from "react";
import { bulb } from "../../assets/images";
import { BlockchainServiceCard, Button } from "../../components";

const cardData = [
    {
        text: 'Smart Contract',
        classname: 'from-purple-700 to-purple-400 hover:shadow-purple-500/90 hover:shadow-2xl',
    },
    {
        text: 'ICO',
        classname: 'from-red-400 to-red-300 hover:shadow-red-500/90 hover:shadow-2xl',
    },
    {
        text: 'Coin',
        classname: 'from-[#95D3BE] to-[#D4EDE4] hover:shadow-[#95D3BE] hover:shadow-2xl',
    },
    {
        text: 'Exchange',
        classname: 'from-purple-500 to-yellow-700/50 hover:shadow-purple-500/90 hover:shadow-2xl',
    },
    {
        text: 'Token',
        classname: 'from-gray-600 to-gray-400 hover:shadow-gray-500/90 hover:shadow-2xl',
    },
    {
        text: 'DEFI',   
        classname: 'from-purple-800 to-purple-300 hover:shadow-purple-500/90 hover:shadow-2xl',
    },
    {   
        text: 'NFT',
        classname: 'from-blue-800 to-blue-300 hover:shadow-blue-500/90 hover:shadow-2xl',
    },  
    {
        text: 'DAPPS',
        classname: 'from-red-600 to-red-300 hover:shadow-red-500/90 hover:shadow-2xl',
    },
]
const BlockchianServices = () => {
  return (
    <div className="p-10 flex flex-col gap-10 items-center">
        {/* 1st  */}
      <h1 className="pb-10 text-9xl font-bold tracking-tighter self-start">
        BLOCKCHAIN SERVICES
      </h1>

        {/* 2nd */}
      <div className="flex gap-5">
        <div className="text-9xl font-bold text-purple-700 text-nowrap ">
          WE PROVIDE
        </div>
        <p className="text-xl leading-9 pt-2">Our commitment to innovation extends to harnessing the power of blockchain technology to enhance the security, transparency, and efficiency of MLM businesses.</p>
      </div>

      {/* 3rd  */}
      <div className="grid grid-cols-4 grid-rows-2 gap-x-3 gap-y-6">
        {cardData.map((card) => (
            <BlockchainServiceCard text={card.text} className={card.classname} image={bulb}/>
        ))}
      </div>

      <Button text={'Reques a Call back Now'} />
    </div>
  );
};

export default BlockchianServices;
