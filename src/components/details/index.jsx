import React from "react";
import { useParams } from "react-router-dom";
import { cardsData } from "../../api";
import detailsImg from "../../assets/details.png";

const Details = () => {
  const { id } = useParams();
  const video = cardsData.find((item) => item.id === Number(id));

  if (!video) return <p className="text-white">Video topilmadi!</p>;

  return (
    <div className="bg-[#000000] min-h-[100vh] w-full pl-[246px] lg:pl-[21.2%] pt-[105px] text-white">
      <img src={detailsImg} alt="img" className="w-full" />
      <div className="flex items-center justify-between bg-[#181818] px-[65px] py-[22px]">
        <div className="flex items-center gap-[10px]">
          <img src={video.avatar} alt="avatar" className="w-[80px] rounded-full" />
          <div>
            <p className="text-[22px]">{video.author}</p>
            <p className="text-[14px] text-[#AAAAAA]">1.2M subscribers</p>
          </div>
        </div>
        <button className="bg-[#CC0000] text-white px-[20px] py-[8px] uppercase cursor-pointer text-[14px] font-bold">Subscribers</button>
      </div>
      <div className='flex flex-col md:flex-row items-center gap-[20px] py-[30px]'>
        <img src={video.img} alt="img" className="w-full md:w-[408px]" />
        <div className="w-full md:w-[400px] flex flex-col gap-[15px]">
          <p>{video.title}</p>
          <span className="text-[#AAAAAA] text-[14px]">
            {video.views}.{video.date}
          </span>
          <p className="text-[14px]">
            {video.author}, also known as the Blind Woodturner, learned his craft
            by listening to hundreds of hours of YouTube videos and
            experimenting in his workshop. Now he’s a YouTube creator himself,
            sells his products worldwide, and does demonstrations all around the
            country.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
