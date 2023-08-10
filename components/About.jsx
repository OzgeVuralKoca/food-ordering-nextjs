import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div className='bg-secondary text-white'>
            <div className='container mx-auto py-20 flex max-md:flex-col-reverse justify-between items-center gap-y-10'>
                <div className='relative sm:w-[445px] w-[300px] h-[600px] mx-5'>
                    <Image src="/images/about-img.png" alt="" layout='fill' />
                </div>
                <div className='md:w-1/2 p-5 flex-1'>
                    <h1 className='font-dancing text-4xl font-semibold'>We Are Feane</h1>
                    <p className='py-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All</p>
                    <button className='btn-primary'>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default About