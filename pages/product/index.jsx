import Image from 'next/image'
import { BiSolidCart } from 'react-icons/bi'

const index = () => {
    return (
        <div className='container mx-auto flex max-md:flex-col py-10 gap-10 h-screen'>
            <div className='relative flex-1 flex items-center'>
                <Image src="/images/f1.png" alt='' width={800} height={800} />
            </div>
            <div className='flex-1 flex justify-center flex-col gap-3'>
                <h1 className='font-dancing text-4xl'>Good Pizza</h1>
                <span className='text-primary font-bold text-xl'>$10</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sint quisquam placeat tempore ducimus quo rerum quae optio, ex aperiam recusandae laborum!</p>
                <div>
                    <h4 className='font-bold text-lg mt-3'>Choose the Size</h4>
                    <div className='flex gap-5 mt-2'>
                        <span className='bg-primary px-3 rounded-2xl cursor-pointer hover:opacity-80'>small</span>
                        <span className='bg-primary px-3 rounded-2xl cursor-pointer hover:opacity-80'>medium</span>
                        <span className='bg-primary px-3 rounded-2xl cursor-pointer hover:opacity-80'>large</span>
                    </div>
                </div>
                <div>
                    <h4 className='font-bold text-lg mt-3'>Choose additional ingredients</h4>
                    <div className='flex gap-5 mt-2'>
                        <label className='flex items-center gap-1'>
                            <input type="checkbox" className='h-5 w-5 accent-primary' />
                            <span className='font-semibold'>ketçap</span>
                        </label>
                        <label className='flex items-center gap-1'>
                            <input type="checkbox" className='h-5 w-5 accent-primary' />
                            <span className='font-semibold'>ketçap</span>
                        </label>
                        <label className='flex items-center gap-1'>
                            <input type="checkbox" className='h-5 w-5 accent-primary' />
                            <span className='font-semibold'>ketçap</span>
                        </label>
                    </div>
                </div>
                <div>
                    <button className='btn-primary font-semibold flex items-center mt-3'>
                        <span>Add to Cart</span>
                        <BiSolidCart size={20} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default index