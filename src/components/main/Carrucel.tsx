import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem
} from "@/components/ui/carousel"
import { type CarouselApi } from "@/components/ui/carousel"
import {  useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "../ui/button"

export default function Carrucel() {
    const [api, setApi] = useState<CarouselApi>()
 
  

    return (
        <div className="max-w-5xl mx-auto mt-10">
        <Carousel setApi={setApi} plugins={[
            Autoplay({
                delay: 8000,
            })
        ]} opts={{
            loop: true
        }}>
            <CarouselContent>
                <CarouselItem>
                    <img className="news__image" src="https://www.uhipocrates.edu.mx/wp-content/uploads/2022/07/estudia-el-arte-de-la-medicina.jpg" alt="" />
                </CarouselItem>
                <CarouselItem>
                    <img className="news__image" src="https://www.nosequeestudiar.net/site/assets/files/1695521/de-que-se-trata-la-carrera-de-medicina.jpg" alt="" />
                </CarouselItem>
                <CarouselItem>
                    <img className="news__image" src="https://www.uhipocrates.edu.mx/wp-content/uploads/2022/07/estudia-el-arte-de-la-medicina.jpg" alt="" />
                </CarouselItem>
            </CarouselContent>
        </Carousel>
        <div className="flex justify-end items-center gap-4 mt-6">
            <Button size={'icon'} variant={'secondary'} className="size-12 md:size-14"  onClick={() => api?.scrollPrev()}> 
                <ArrowLeft/>
            </Button>
            <Button size={'icon'} variant={'secondary'} className="size-12 md:size-14"  onClick={() => api?.scrollNext()}> 
                <ArrowRight/>
            </Button>
        </div>
        </div>

    )
}
