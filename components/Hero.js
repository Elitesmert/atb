import Image from "next/image";
import React from "react";
import banner1 from "../public/image/arma3-banner-1.png"
import banner2 from "../public/image/arma3.png"
import Slider from "./Slider";
import { SliderData } from '../components/SliderData'

const Hero = () => {
    return (
        <section className="overflow-hidden text-gray-700 ease-in duration-200 xl:mx-[15%] sm:mx-[10%] mx-5 sm:mt-20 mt-10">
            <div className="container ease-in duration-200">
                <div className="flex flex-wrap ease-in duration-200">
                    <div className="flex flex-wrap sm:w-3/4 w-full ease-in duration-200">
                        <div className="w-full ease-in duration-200 ">
                            <Slider slides={SliderData} />
                        </div>
                    </div>
                    <div className="flex sm:flex-wrap sm:w-1/4 w-full ease-in duration-200 carousel-indicators relative">
                        <div className="w-full ease-in duration-200 basvuru-logo">
                            <Image alt="gallery"
                                layout="responsive"
                                className="carousel-indicators"
                                src={banner1} />
                        </div>
                        <div className="w-full ease-in duration-200 ">
                            <Image alt="gallery"
                                layout="responsive"
                                src={banner2} />
                        </div>
                    </div>
                </div>
            </div>
        </section>



    );
};

export default Hero;
