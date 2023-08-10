import { useState } from 'react'
import { BiSolidUser, BiSolidCart, BiSearch } from 'react-icons/bi'
import { FiMenu } from 'react-icons/fi'
import {AiOutlineClose} from 'react-icons/ai'
import { useRouter } from 'next/router'
import Logo from '../ui/logo'
import Search from '../ui/Search'

const Header = () => {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [isOpenMenu, setIsOpenMenu] = useState(false)

    const router = useRouter()

    return (
        <section className={`h-[5.5rem] relative z-40 ${
            router.asPath === '/' ? 'bg-transparent' : 'background-color'
        }`}>
            <div className='container flex justify-between mx-auto text-white h-full items-center'>
                <Logo />
                <nav className={`md:block ${isOpenMenu !== true && "hidden"}`} >
                    <ul className='md:flex md:gap-x-2 md:bg-none background-color max-md:absolute max-md:w-screen max-md:z-40 max-md:left-0 max-md:top-20 max-md:text-center'>
                        <li className='px-[5px] py-[8px] text-lg uppercase'>
                            <a href="" className='hover:text-primary transition-all'>Home</a>
                        </li>
                        <li className='px-[5px] py-[8px] text-lg uppercase'>
                            <a href="" className='hover:text-primary transition-all'>Menu</a>
                        </li>
                        <li className='px-[5px] py-[8px] text-lg uppercase'>
                            <a href="" className='hover:text-primary transition-all'>About</a>
                        </li>
                        <li className='px-[5px] py-[8px] text-lg uppercase'>
                            <a href="" className='hover:text-primary transition-all'>Book Table</a>
                        </li>
                    </ul>
                </nav>
                <div className={`${isOpenMenu !== true && "hidden"} md:flex flex items-center gap-x-4 md:bg-none background-color max-md:py-[20px] max-md:absolute max-md:z-50 max-md:w-screen max-md:left-0 max-md:top-[250px] max-md:justify-center `}>
                    <a href="" className='hover:text-primary transition-all'>
                        <BiSolidUser size={20} />
                    </a>
                    <a href="" className='hover:text-primary transition-all'>
                        <BiSolidCart size={20} />
                    </a>
                    <button
                        onClick={() => setIsOpenModal(true)}
                        className='hover:text-primary transition-all'
                    >
                        <BiSearch size={20} />
                    </button>
                    <a href="">
                        <button className='btn-primary'>Order Online</button>
                    </a>
                </div>
                {
                    isOpenMenu 
                    ?
                       <button
                            onClick={() => setIsOpenMenu(false)}
                            className='md:hidden'
                        >
                            <AiOutlineClose size={35} className='text-white hover:text-primary transition-all' />
                        </button> 
                    :
                        <button
                            onClick={() => setIsOpenMenu(true)}
                            className='md:hidden hover:text-primary transition-all'
                        >
                            <FiMenu size={40} />
                        </button>
                }

            </div>
            {isOpenModal && <Search setIsOpenModal={setIsOpenModal} />}
        </section>
    )
}

export default Header