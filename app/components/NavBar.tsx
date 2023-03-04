import Image from 'next/image'
import React from 'react'
import Logo from '../../public/images/codedamn.svg'
import SearchIcon from '../../public/images/search.svg'
import Lightning from '../../public/images/Lightning.svg'
import NotificationIcon from '../../public/images/notification.svg'
import ProfileImage from '../../public/images/profile.svg'



export default function NavBar() {
    return (
        <div className='flex justify-between w-full p-6'>
            <Image src={Logo} alt="" />
            <div className='flex items-center justify-between w-[700px]'>
                <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative flex w-[368px]">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <Image src={SearchIcon} alt="" height={20} width={20} />
                    </div>
                    <input type="search" id="default-search" className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white" placeholder="Search" />
                    <button type="submit" className=" absolute right-2.5 top-[5px] bg-slate-100 font-medium rounded-lg text-sm px-4 py-2 text-[#71717A]">Courses</button>
                </div>
                <div className='flex items-center justify-between w-56'>
                    <Image src={Lightning} alt="" />
                    <p className='text-[#71717A] font-semibold ml-2'>2</p>
                    <Image src={NotificationIcon} alt="" />
                    <Image className="w-10 h-10 p-1 rounded-full" src={ProfileImage} alt="" />
                </div>
            </div>
        </div>
    )
}
