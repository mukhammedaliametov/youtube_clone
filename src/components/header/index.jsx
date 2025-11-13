import React from 'react';
import { FiMenu } from "react-icons/fi";
import logo from '../../assets/logo.svg';
import { IoIosSearch } from "react-icons/io";
import { HiMicrophone } from "react-icons/hi2";
import create from '../../assets/create.svg';
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdLogout } from "react-icons/md";

const Header = () => {
    const handleLogout = () => {
    localStorage.removeItem("isLogged");
    window.location.reload();
  };
    return (
        <div className='bg-[#212121] fixed w-full text-white py-[20px] md:py-[8px] z-999'>
            <div className='w-[96%] mx-auto px-[16px] xl:px-0 flex items-center justify-between'>
                <div className='flex items-center gap-[30px]'>
                    <FiMenu className='hidden md:block text-[23px] text-white cursor-pointer' />
                    <a href="#"><img src={logo} alt="logo" /></a>
                </div>
                <div className='hidden md:flex items-center gap-[10px] w-[35%]'>
                    <div className='bg-[#121212] border border-[#303030] rounded-[2px] overflow-hidden flex items-center gap-[10px] pl-[8px] w-full'>
                        <input type="text" placeholder='Search' className='outline-none w-full' />
                        <div className='px-[20px] text-[24px] bg-[#303030] py-[10px] cursor-pointer'>
                            <IoIosSearch /> 
                        </div>
                    </div>
                    <div className='bg-[#000] p-[10px] rounded-full text-[20px] cursor-pointer'>
                        <HiMicrophone />
                    </div>
                </div>
                <div className='flex items-center gap-[20px]'>
                    <div className='block md:hidden text-[22px] cursor-pointer'>
                            <IoIosSearch /> 
                        </div>
                    <img src={create} alt="create_video" className='cursor-pointer' />
                    <div className='text-[22px] cursor-pointer'>
                        <IoMdNotificationsOutline />
                    </div>
                    <div className='text-[22px] cursor-pointer' onClick={handleLogout} title='Logout'>
                        <MdLogout />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;