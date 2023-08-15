import MenuItem from './MenuItem'

const MenuWrapper = () => {
  return (
    <div className='container mx-auto mb-20 flex flex-col items-center'>
        <h1 className='font-dancing text-4xl font-bold text-center'>Our Menu</h1>
        <div className='flex gap-10 text-lg my-10'>
            <button className='text-white bg-secondary rounded-3xl px-6 py-1'>All</button>
            <button>Burger</button>
            <button>Pizza</button>
            <button>Pasta</button>
            <button>Fries</button>
        </div>
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7'>
            <MenuItem />
            <MenuItem />
            <MenuItem />
        </div>
    </div>
  )
}

export default MenuWrapper