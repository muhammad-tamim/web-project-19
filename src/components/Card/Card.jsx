import React from 'react';
import { CiBookmark } from 'react-icons/ci';

const Card = ({ singleData }) => {

    const { cover, title, author_img, author, posted_date, reading_time, hashtags } = singleData;

    return (
        <div className="pr-6 space-y-8 mb-10">
            <div>
                <img className='w-full' src={cover} alt="" />
            </div>
            <div className='flex justify-between'>
                <div className='flex items-center gap-6'>
                    <div>
                        <img src={author_img} alt="" />
                    </div>
                    <div>
                        <h3 className='text-xl font-bold'>{author}</h3>
                        <p className='text-[#11111160] font-semibold'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center text-xl font-medium text-[#11111160]'>
                    {reading_time} min read <CiBookmark className='text-2xl cursor-pointer' />
                </div>
            </div>
            <div>
                <h1 className='text-[40px] font-bold max-w-[737px]'>{title}</h1>
            </div>
            <div className='flex text-xl font-medium text-[#11111160] gap-4'>
                {hashtags.map((tags, index) => <p key={index} className=''>{tags}</p>)}
            </div>
            <div>
                <p className='text-[#6047EC] text-xl font-semibold underline cursor-pointer'>Mark As Read</p>
            </div>
            <div>
                <hr className='text-[#11111115]' />
            </div>
        </div>
    );
};

export default Card;