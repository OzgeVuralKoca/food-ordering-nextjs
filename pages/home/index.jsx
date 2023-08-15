import Carousel from '@/components/Carousel'
import Campaign from "@/components/Campaign"
import MenuWrapper from '@/components/product/MenuWrapper'
import About from '@/components/About'
import Reservation from '@/components/Reservation'

const index = () => {
  return (
    <div>
      <Carousel />
      <Campaign />
      <MenuWrapper />
      <About />
      <Reservation />
    </div>
  )
}

export default index