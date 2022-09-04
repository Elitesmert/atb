import Image from "next/image"
import React, { useState } from "react"
import { SliderData } from "./SliderData"
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"

const Slider = ({ slides }) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    return (
        <section className="flex relative">
            <div className="flex z-[1] justify-between absolute  w-full h-full items-center">
                <div
                    className=" h-full flex items-center hover:text-gray-500 hover:bg-gradient-to-r from-black/50 to-transparent rounded-2xl"
                    onClick={prevSlide}
                >
                    <AiOutlineLeft
                        size={30}
                        className="left-arrow ml-5"
                    />
                </div>
                <div
                    className="h-full flex items-center hover:text-gray-500 hover:bg-gradient-to-l from-black to-transparent ease-in duration-200 rounded-2xl"
                    onClick={nextSlide}
                >
                    <AiOutlineRight
                        size={30}
                        className="right-arrow carousel-indicators mr-5"
                    />
                </div>
            </div>

            {SliderData.map((slide, index) => {
                return (
                    <div
                        className={index === current ? "slide active lg:h-[480px] sm:w-screen h-[300px]" : "slide"}
                        key={index}
                    >
                        {index === current && (
                            <Image
                                src={slide.image}
                                alt="atb"
                                layout="fill"
                                objectFit="fill"
                                className="rounded-2xl"
                            />
                        )}
                    </div>
                )
            })}
        </section>
    )
}

export default Slider
