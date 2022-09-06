import Image from "next/image"
import React, { useState, useEffect } from "react"
import { SliderData } from "./SliderData"
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"

const Slider = ({ slides }) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(current === length - 1 ? 0 : current + 1)
        }, 10000)
        return () => clearInterval(interval)
    }, [current, length])

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
                    className=" h-full flex items-center  ease-in duration-200 hover:text-gray-500 hover:bg-gradient-to-r from-black/50 to-transparent rounded-2xl  select-none "
                    onClick={prevSlide}
                >
                    <AiOutlineLeft
                        size={30}
                        className="left-arrow ml-5 select-none"
                    />
                </div>
                <div
                    className="h-full flex items-center hover:text-gray-500 hover:bg-gradient-to-l from-black/50 to-transparent ease-in-out duration-200 rounded-2xl select-none"
                    onClick={nextSlide}
                >
                    <AiOutlineRight
                        size={30}
                        className="right-arrow carousel-indicators mr-5 select-none"
                    />
                </div>
            </div>

            {SliderData.map((slide, index) => {
                return (
                    <div
                        className={index === current ? "slide active 2xl:h-[480px] xl:h-[400px] lg:h-[380px] sm:h-[300px] sm:w-full h-[300px] opacity-100 duration-500 transform-[scale(1.08)] transition-all" : "slide opacity-0 transition-all duration-500 ease-in-out"}
                        key={index}
                    >
                        {index === current && (
                            <Image
                                src={slide.image}
                                alt="atb"
                                layout="fill"
                                objectFit="fill"
                                className="rounded-2xl select-none"
                            />
                        )}
                    </div>
                )
            })}
        </section>
    )
}

export default Slider
