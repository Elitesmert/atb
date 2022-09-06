import Image from "next/image"
import React from "react"
import banner1 from "../public/image/arma3-banner-1.png"
import banner2 from "../public/image/arma3.png"
import Slider from "./Slider"
import { SliderData } from "./SliderData"

const Hero = () => {
    return (
        <section className="overflow-hidden text-gray-700 ease-in duration-200 xl:mx-[15%] sm:mx-[10%] mx-5 sm:mt-20 mt-10">
            <div className="container ease-in duration-200">
                <div className="flex flex-wrap sm:flex-nowrap ease-in duration-200">
                    <div className="flex flex-wrap sm:w-3/4 w-full ease-in duration-200 sm:mr-2">
                        <div className="w-full ease-in duration-200 ">
                            <Slider slides={SliderData} />
                        </div>
                    </div>
                    <div className="flex sm:flex-wrap sm:w-1/4 w-full sm:ml-2 ease-in duration-200 carousel-indicators relative items-center justify-center">
                        <div className="w-full ease-in duration-200 basvuru-logo">
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLSd85CP6VX77vAO_kv8PWzV1Y2pqLWHkMGP3dal-DA_xr6ptgQ/viewform"
                                target="_blank"
                            >
                                <Image
                                    alt="gallery"
                                    layout="responsive"
                                    className="carousel-indicators"
                                    src={banner1}
                                />
                            </a>
                        </div>
                        <div className="w-full ease-in duration-200 ">
                            <Image alt="gallery" layout="responsive" src={banner2} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
