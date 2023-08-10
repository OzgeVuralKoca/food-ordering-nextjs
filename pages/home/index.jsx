import Carousel from '@/components/Carousel'
import Campaign from "@/components/Campaign"
import MenuWrapper from '@/components/product/MenuWrapper'
import About from '@/components/About'

const index = () => {
  return (
    <div>
      <Carousel />
      <Campaign />
      <MenuWrapper />
      <About />
    </div>
  )
}

export default index