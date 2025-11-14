import React from 'react';
import { Link } from 'react-router-dom'

const Card = (props) => {
    return (
        <Link to={`/video/${props.id}`}>
            <div className='relative'>
                <img src={props.img} alt="img" className='w-full' />
                <p className='absolute bottom-0 right-0 m-[5px] bg-[#030303] py-[3px] px-[6px] text-[14px]'>{props.duration}</p>
            </div>
            <div className='flex items-start gap-[10px] mt-[15px]'>
                <div>
                    <img src={props.avatar} alt="avatar" className='w-[45px] rounded-full' />
                </div>
                <div>
                    <p className='text-[16px]/[21px] mb-[5px]'>{props.title}</p>
                    <p className='text-[#AAAAAA] text-[14px]'>{props.author}</p>
                    <span className='text-[#AAAAAA] text-[14px]'>{props.views}.{props.date}</span>
                </div>
            </div>
        </Link>
    );
};

export default Card;