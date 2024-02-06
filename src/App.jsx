import { CazySlider } from './components/crazySlider/CazySlider'
import { NavBar } from './components/navBar/navBar'
import { SliderAuto } from './components/infiniteSliderAuto/sliderAuto'
import { Card } from './components/Card'
import { Carousel } from './components/carousel/Carousel'
function App() {

  return (
    <>
      <NavBar />
      <CazySlider />
      {/* <div className='h-auto w-full my-2'>
        <Card></Card>
      </div>
      <SliderAuto /> */}
      <Carousel>

      </Carousel>
    </>
  )
}

export default App
