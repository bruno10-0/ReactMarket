import { NavBar } from "../components/navBar/navBar"
import { CrazySlider } from "../components/crazySlider/CazySlider"
import { Carousel } from "../components/carousel/Carousel"
import { SliderAuto } from "../components/infiniteSliderAuto/sliderAuto"
import { Footer } from "../components/footer/footer"
export const Inicio = () => {
    return (
        <div>
            <NavBar />
            <CrazySlider />
            <Carousel />
            <SliderAuto />
            <Footer/>
        </div>
    )
}
