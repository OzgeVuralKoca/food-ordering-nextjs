import Image from 'next/image'
import { BiSolidCart } from 'react-icons/bi'

const MenuItem = () => {
  return (
    <div className='bg-secondary rounded-xl rounded-t-3xl'>
        <div className='bg-neutral-200 rounded-t-xl rounded-bl-3xl p-8'>
            <Image src='/images/f1.png' width={150} height={150} alt='...' className='mx-auto hover:scale-110 transition-all' />
        </div>
        <div className='text-white p-5'>
          <h3 className='text-xl font-semibold'>Delicious Pizza</h3>
          <p>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
          <div className='pt-3 flex justify-between items-center'>
            <p>$20</p>
            <button className='bg-primary rounded-full p-3'>
              <BiSolidCart size={20} />
            </button>
          </div>
        </div>
    </div>
  )
}

export default MenuItem