import Image from "next/image"
import { BiSolidCart } from 'react-icons/bi'

const Campaign = () => {
  return (
    <div className="flex max-md:flex-col container mx-auto justify-between py-20 gap-10">
      <div className="bg-secondary rounded p-5 flex gap-x-4 flex-1">
        <Image
          src="/images/o1.jpg"
          alt=""
          width={160}
          height={160}
          className="rounded-full border-primary border-4 hover:scale-110 transition-all" />
        <div className="text-white flex flex-col justify-between gap-2 py-4">
          <h3 className="font-dancing text-2xl">Tasty Thursdays</h3>
          <h1 className="font-dancing text-4xl">20% off</h1>
          <button className="btn-primary flex items-center gap-x-1">Order Now <BiSolidCart size={20} /> </button>
        </div>
      </div>
      <div className="bg-secondary rounded p-5 flex gap-x-4 flex-1">
        <Image src="/images/o2.jpg" alt="" width={160} height={160} className="rounded-full border-primary border-4 hover:scale-110 transition-all" />
        <div className="text-white flex flex-col justify-between gap-2 py-4">
          <h3 className="font-dancing text-2xl">Pizza Days</h3>
          <h1 className="font-dancing text-4xl">15% off</h1>
          <button className="btn-primary flex items-center gap-x-1">Order Now <BiSolidCart size={20} /> </button>
        </div>
      </div>
    </div>
  )
}

export default Campaign