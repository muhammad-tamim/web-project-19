import React, { useState } from 'react';
import { CiBookmark } from 'react-icons/ci';

const Card = ({ singleData, handleBookmarked, handleMarkAsRead }) => {

    const { cover, title, author_img, author, posted_date, reading_time, hashtags } = singleData;

    const [clicked, setClicked] = useState(false)

    return (
        <div className="pr-6 space-y-3 lg:space-y-6 mb-10">
            <div>
                <img className='w-full' src={cover} alt="" />
            </div>
            <div className='flex justify-between'>
                <div className='flex items-center gap-2 lg:gap-6'>
                    <div>
                        <img src={author_img} alt="" />
                    </div>
                    <div>
                        <h3 className='lg:text-xl font-bold'>{author}</h3>
                        <p className='text-[#11111160] dark:text-white textarea-xs lg:text-base font-semibold'>{posted_date}</p>
                    </div>
                </div>
                <div className={`flex items-center text-xs lg:text-xl font-medium dark:text-white text-[#11111160]`}>
                    {reading_time} min read <CiBookmark onClick={() => {
                        handleBookmarked(singleData)
                        setClicked(true)
                    }} className={`text-2xl cursor-pointer ${clicked && 'text-primary font-black'}`} />
                </div>
            </div>
            <div>
                <h1 className='text-lg lg:text-[40px] font-bold max-w-[737px]'>{title}</h1>
            </div>
            <div className='flex lg:text-xl font-medium dark:text-white text-[#11111160] gap-4'>
                {hashtags.map((tags, index) => <p key={index} className=''>{tags}</p>)}
            </div>
            <div>
                <p className='text-[#6047EC] text-xl font-semibold underline cursor-pointer' onClick={() => handleMarkAsRead(singleData.id)}>Mark As Read</p>
            </div>
            <div>
                <hr className='dark:text-white text-[#11111115]' />
            </div>
        </div>
    );
};

export default Card;