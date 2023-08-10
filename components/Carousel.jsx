import Image from 'next/image'
import Slider from "react-slick";

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        appenDots: (dots) => (
            <div>
                <ul>{dots}</ul>
            </div>
        ),
        customPaging: (i) => (
            <div className="w-3 h-3 border bg-white rounded-full mt-5"></div>
        )
    };

    return (
        <div className='w-screen -mt-[88px] h-screen'>
            <div className='w-screen'>
                <Image
                    src="/images/hero-bg.jpg"
                    alt=''
                    layout='fill'
                    objectFit='cover' />
            </div>
            <Slider {...settings}>
                <div>
                    <div className='container pt-[150px] md:ps-20 max-md:mx-auto md:w-1/2 w-full'>
                        <h1 className='font-dancing text-white sm:text-6xl text-4xl'>Fast Food Restaurant</h1>
                        <p className='text-white py-5'>Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.</p>
                        <button className='btn-primary'>Order Online</button>
                    </div>
                </div>
                <div>
                    <div className='container pt-[150px] md:ps-20 max-md:mx-auto md:w-1/2 w-full'>
                        <h1 className='font-dancing text-white sm:text-6xl text-4xl'>Fast Food Restaurant</h1>
                        <p className='text-white py-5'>Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.</p>
                        <button className='btn-primary'>Order Online</button>
                    </div>
                </div>
                <div>
                    <div className='container pt-[150px] md:ps-20 max-md:mx-auto md:w-1/2 w-full'>
                        <h1 className='font-dancing text-white sm:text-6xl text-4xl'>Fast Food Restaurant</h1>
                        <p className='text-white py-5'>Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.</p>
                        <button className='btn-primary'>Order Online</button>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default Carousel