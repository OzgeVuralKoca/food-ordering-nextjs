
const input = () => {
  return (
    <div className='w-full'>
        <label className='relative block cursor-text w-full'>
            <input
              type="text"
              className='w-full h-12 border border-primary outline-none px-4 pt-2 peer rounded-lg' 
              required />
            <span className='absolute top-0 left-0 px-4 h-full flex items-center peer-focus:h-7 peer-focus:text-xs peer-valid:h-7 peer-valid:text-xs transition-all'>Email</span>
        </label>
    </div>
  )
}

export default input