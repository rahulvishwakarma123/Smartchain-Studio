import React from "react";
import { Button } from "../../components";
import {
  BlockchainLeft,
  BlockchainMiddle,
  BlockchainRight,
} from "../../assets/images";
import { StarIcon } from "lucide-react";
const WhoWeAre = () => {
  return (
    <div className="p-10 bg-blue-100/40">

        
      <h1 className="mb-5 text-9xl font-bold tracking-tight">
        WHO <span className="text-purple-600"> WE</span> ARE?
      </h1>


      <div className="flex gap-5">
        <div className="flex basis-1/2 items-start space-x-6">
          <div className="h-10/12 w-1/3 overflow-hidden rounded-full">
            <img
              className="h-full w-full"
              src={BlockchainLeft}
              alt="blockchain"
            />
          </div>
          <div className="h-10/12 w-1/3 self-end overflow-hidden rounded-full">
            <img
              className="h-full w-full"
              src={BlockchainMiddle}
              alt="blockchain"
            />
          </div>
          <div className="h-10/12 w-1/3 overflow-hidden rounded-full">
            <img
              className="h-full w-full"
              src={BlockchainRight}
              alt="blockchain"
            />
          </div>
        </div>
        <div className="basis-1/2 pl-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-5xl font-medium">Introducing</h2>
            <h2 className="text-5xl font-medium">Blockchain Boostup</h2>
            <p className="mt-5 text-lg text-gray-600">
              At BlockChain Boostup, we are not just a team of professionals; we
              are industry leaders dedicated to creating tailor-made software
              solutions for the dynamic realm of Multi-Level Marketing (MLM).
            </p>
            <p className="text-lg text-gray-600">
              Our core foundation is built upon an extensive understanding of
              the intricacies of MLM, empowering us to deliver software that is
              not just innovative and scalable but also precisely crafted to
              meet the diverse needs of MLM businesses.
            </p>
            <p className="text-lg text-gray-600">
              Beyond being developers, we are committed partners on a mission to
              elevate and transform MLM ventures. We achieve this through a
              combination of cutting-edge technology, personalized attention,
              and an unwavering dedication to driving success
            </p>
            <Button
              text={"Request a Call back Now"}
              className={"mt-5 self-start"}
            />
          </div>
        </div>
      </div>


      <div className="flex pt-10 px-10 gap-5">
        <div className="flex flex-col basis-4/12 gap-5">
            <h3 className="font-medium text-4xl text-nowrap">Our Feedback</h3>
            <p className="text-2xl text-gray-500 ">Since 2017 Reed has pioneered specialist Blockchains, MLM knowledgeable</p>
            <a className="text-lg font-bold text-purple-600" href="">Get Started</a>
        </div>
        <div className="basis-5/12 flex justify-between items-center gap-10 pl-5">
            <div className="flex flex-col items-center">
                <p className="text-purple-600 text-9xl font-light">12+</p>
                <p className="text-xl">YOURS IN BUSINESS</p>
            </div>
            <StarIcon size={45} className="text-gray-500"/>
            <div className="flex flex-col items-center">
                <p className="text-purple-600 text-9xl font-light">1200+</p>
                <p className="text-xl">HAPPY CLIENTS</p>
            </div>
            <StarIcon size={45} className="text-gray-500"/>
            <div className="flex flex-col  items-center">
                <p className="text-purple-600 text-9xl font-light">100%</p>
                <p className="text-xl">CLIENT SATISFACTION</p>
            </div>
        </div>

      </div>
    </div>
  );
};

export default WhoWeAre;
