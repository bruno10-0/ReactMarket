import { NavBar } from "../components/navBar/navBar"
import { CrazySlider } from "../components/crazySlider/CazySlider"
import {SliderMobile} from "../components/sliderMovile/sliderMobile"
import { Carousel } from "../components/carousel/Carousel"
import { SliderAuto } from "../components/infiniteSliderAuto/sliderAuto"
import { Footer } from "../components/footer/footer"
export const Inicio = () => {
    return (
        <div>
            <NavBar />
            <CrazySlider/>
            <SliderMobile/>
            <Carousel to={"/productos"} />
            <SliderAuto />
            <Footer />
        </div>
    )
}
