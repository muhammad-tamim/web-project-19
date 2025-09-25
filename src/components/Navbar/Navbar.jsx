import React from 'react';

const Navbar = () => {
    return (
        <div className='px-4 xl:px-0'>
            <div className='flex justify-between items-center mt-[50px] mb-8'>
                <div>
                    <h1 className='text-2xl md:text-[40px] font-bold'>Knowledge Cage</h1>
                </div>
                <div>
                    <img className='size-10 md:size-[60px]' src="https://i.ibb.co.com/MkMnhgBT/avatar1.png" alt="" />
                </div>
            </div>
            <hr className='text-[#11111115]' />
        </div>
    );
};

export default Navbar;