import React from "react";
import home from "../../assets/home.svg";
import explore from "../../assets/explore.svg";
import subscriptions from "../../assets/subscriptions.svg";
import library from "../../assets/library.svg";
import history from "../../assets/history.svg";
import yourvideos from "../../assets/yourvideos.svg";
import watchlater from "../../assets/watchlater.svg";
import likesvideos from "../../assets/likesvideos.svg";
import youtubepremium from "../../assets/youtubepremium.svg";
import gaming from "../../assets/gaming.svg";
import live from "../../assets/live.svg";
import james from "../../assets/james.svg";
import alan from "../../assets/alan.svg";
import marcus from "../../assets/marcus.svg";
import alexis from "../../assets/alexis.svg";
import jesica from "../../assets/jesica.svg";
import anna from "../../assets/anna.svg";
import skylar from "../../assets/skylar.svg";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const sidebarItems = [
    { icon: home, name: "Home" },
    { icon: explore, name: "Explore" },
    { icon: subscriptions, name: "Subscriptions" },
    { icon: library, name: "Library" },
    { icon: history, name: "History" },
    { icon: yourvideos, name: "Your videos" },
    { icon: watchlater, name: "Watch later" },
    { icon: likesvideos, name: "Liked videos" },
    { icon: youtubepremium, name: "Youtube premium" },
    { icon: gaming, name: "Gaming" },
    { icon: live, name: "Live" },
  ];
  const subscriptionsItems = [
    { avatar: james, name: "James Gouse" },
    { avatar: alan, name: "Alan Cooper" },
    { avatar: marcus, name: "Marcus Levin" },
    { avatar: alexis, name: "Alexis Sears" },
    { avatar: jesica, name: "Jesica Lambert" },
    { avatar: anna, name: "Anna White" },
    { avatar: skylar, name: "Skylar Dias" },
  ];
  return (
    <>
    <div className="hidden md:block bg-[#212121] fixed min-w-[242px] w-[20%] text-white mt-[60px] overflow-y-scroll h-screen pb-[60px]">
      <div className="mb-[3px]">
        {sidebarItems.slice(0, 3).map((item, index) => (
          <Link to='javascript:void(0)' key={index} className="flex items-center gap-[20px] px-[25px] py-[12px] first:bg-[#303030] cursor-pointer hover:bg-[#303030]">
            <img src={item.icon} alt="icon" />
            <span className='text-[14px]'>{item.name}</span>
          </Link>
        ))}
      </div>
      <div className="border-y border-[#303030] py-[3px]">
        {sidebarItems.slice(3, 8).map((item, index) => (
          <Link to={'javascript:void(0)'} key={index} className="flex items-center gap-[20px] px-[25px] py-[12px] cursor-pointer hover:bg-[#303030]">
            <img src={item.icon} alt="icon" />
            <span className='text-[14px]'>{item.name}</span>
          </Link>
        ))}
        <div className="flex items-center gap-[20px] px-[25px] py-[12px] cursor-pointer hover:bg-[#303030]">
          <FaAngleDown /> <span className="text-[14px]"> Show More</span>
        </div>
      </div>
      <div>
        <p className="text-[14px] text-[#AAAAAA] uppercase font-[600] px-[25px] pt-[12px] pb-[10px]">Subscriptions</p>
        {subscriptionsItems.map((item, index) => (
          <div key={index} className="flex items-center gap-[20px] px-[25px] py-[8px] cursor-pointer">
            <img src={item.avatar} alt="avatar" className="rounded-full" />
            <span className='text-[14px]'>{item.name}</span>
          </div>
        ))}
      </div>
      <div className="border-t border-[#303030] py-[3px]">
        <p className="text-[14px] text-[#AAAAAA] uppercase font-[600] px-[25px] pt-[12px] pb-[6px]">More from YouTube</p>
        {sidebarItems.slice(8, 11).map((item, index) => (
          <Link to='javascript:void(0)' key={index} className="flex items-center gap-[20px] px-[25px] py-[12px] cursor-pointer hover:bg-[#303030]">
            <img src={item.icon} alt="icon" />
            <span className='text-[14px]'>{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
    <div className="block md:hidden fixed bottom-0 bg-[#212121] w-full text-white flex items-end justify-evenly">
        {sidebarItems.slice(0, 4).map((item, index) => (
          <Link to='javascript:void(0)' key={index} className="flex flex-col text-center px-[16px] items-center gap-[10px] py-[16px]">
            <img src={item.icon} alt="icon" />
            <span className='text-[14px]'>{item.name}</span>
          </Link>
        ))}
    </div>
    </>
  );
};

export default Sidebar;
