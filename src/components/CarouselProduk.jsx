import React from 'react'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Img1 from "./../assets/IMG_2196.png"
import Img2 from "./../assets/IMG_2223.png"
import Img3 from "./../assets/IMG_2224.png"

export default function CarouselProduk() {

    return (
        <div className='rounded rounded-lg overflow-hidden'>
            <Splide hasTrack={false} options={{
                type: 'loop',
                perPage: 1,
                arrows: 2,
                autoplay: true,
                interval: 1500,
            }} aria-label="My Favorite Images">

                {/* content */}
                <SplideTrack>
                    <SplideSlide>
                        <img src={Img1} alt="Image 1" />
                    </SplideSlide>
                    <SplideSlide>
                        <img src={Img2} alt="Image 2" />
                    </SplideSlide>
                    <SplideSlide>
                        <img src={Img3} alt="Image 2" />
                    </SplideSlide>
                </SplideTrack>

                <div className="splide__arrows">
                    <button className="splide__arrow splide__arrow--prev"></button>
                    <button className="splide__arrow splide__arrow--next"></button>
                </div>

            </Splide>
        </div>
    )
}