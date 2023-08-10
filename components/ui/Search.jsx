import Image from 'next/image';
import OutsideClickHandler from 'react-outside-click-handler';
import { GiCancel } from "react-icons/gi";

const Search = ({ setIsOpenModal }) => {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen z-50 after:content-[''] after:w-screen after:h-screen after:bg-white after:absolute after:top-0 after:left-0 after:opacity-60 grid place-content-center">
            <OutsideClickHandler onOutsideClick={() => setIsOpenModal(false)} >
                <div className="w-full h-full grid place-content-center relative">
                    <div className="relative z-50 sm:w-[450px] w-[370px] rounded-xl bg-neutral-200 border-2 p-10">
                        <div className='text-[40px] text-center font-dancing'>Search</div>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="border w-full my-10 outline-none px-2 py-1 rounded-xl"
                        />
                        <ul>
                            <li className="flex items-center justify-between p-1 hover:bg-primary transition-all">
                                <div className="relative flex">
                                    <Image src="/images/f1.png" alt="" width={40} height={40} />
                                </div>
                                <span className="font-semibold">Good Pizza</span>
                                <span className="font-bold">$10</span>
                            </li>
                            <li className="flex items-center justify-between p-1 hover:bg-primary transition-all">
                                <div className="relative flex">
                                    <Image src="/images/f1.png" alt="" width={40} height={40} />
                                </div>
                                <span className="font-semibold">Good Pizza</span>
                                <span className="font-bold">$10</span>
                            </li>
                            <li className="flex items-center justify-between p-1 hover:bg-primary transition-all">
                                <div className="relative flex">
                                    <Image src="/images/f1.png" alt="" width={40} height={40} />
                                </div>
                                <span className="font-semibold">Good Pizza</span>
                                <span className="font-bold">$10</span>
                            </li>
                        </ul>
                        <button
                            className="absolute  top-4 right-4"
                            onClick={() => setIsOpenModal(false)}
                        >
                            <GiCancel size={25} className=" transition-all" />
                        </button>
                    </div>
                </div>
            </OutsideClickHandler>
        </div>
    )
}

export default Search