import React from "react";
import Header from "../../components/header";
import { cardsData } from "../../api";
import Card from "../../components/card";

const Hero = () => {
  return (
    <div className="bg-[#000000] min-h-[100vh] w-full pt-[20px] px-[20px] pl-[246px] lg:pl-[21.2%] pt-[120px] text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-[20px]">
        {cardsData.map((item, index) => {
          return (
            <Card
              key={index}
              id={item.id}
              img={item.img}
              title={item.title}
              avatar={item.avatar}
              author={item.author}
              views={item.views}
              date={item.date}
              duration={item.duration}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
