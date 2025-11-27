import React from "react";
import ServicesFeaturesCard from "../../components/Services&FeaturesCard";

const data = [
  {
    id: 1,
    tag : 'Services & Features',
    heading: "Cryptocurrency MLM Software",
    buttonText: 'Request a Call back Now',
    desc: "Cryptocurrency has become trending phenomenon for over months now, with its innovative block-chain technology that is revolutionizing the field of MLM. Cryptocurrency being one of the fast-growing technology implementation over these couple of years has also influenced the MLM business too.",
  },
  {
    id: 2,
    tag : 'Services & Features',
    heading: "Ecommerce MLM Software",
    buttonText: 'Request a Call back Now',
    desc: "Ecommerce MLM software used for MLM business. Every multi level marketing business works on the basis of product sales. New members are added to the network only when they purchase product of the MLM business. Majority of the Ecommerce based MLM business have an ecommerce platform which outreach their presence and business.",
  },
  {
    id: 3,
    tag : 'Services & Features',
    heading: "Direct Selling Software",
    buttonText: 'Request a Call back Now',
    desc: "The method of marketing and retailing products or services to buyers directly, without any middlemen such as wholesalers and distributors is called direct selling.",
  },
  {
    id: 4,
    tag : 'Services & Features',
    heading: "Features of MLM Software",
    buttonText: 'Request a Call back Now',
    desc: "BlockChain Boostup - #1 Multi Level Marketing MLM Software development Company having 50+ happy customers around the world",
  },
];

const Page4 = () => {
  return (
    <div className="h-auto p-10">
      <h1 className="text-8xl font-bold mb-10">
        SERVICES <span className="text-purple-600">& FEATURES</span>
      </h1>

      {/* FEATURES CARD  */}
      <div className="flex flex-col gap-10">
        {data.map((elem) => (
            <ServicesFeaturesCard 
                id={elem.id}
                tag={elem.tag}
                heading={elem.heading}
                desc={elem.desc}
                buttonText={elem.buttonText}
            />
        ))}

      </div>
    </div>
  );
};

export default Page4;
