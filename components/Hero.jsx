import Image from "next/image"
import React from "react"
import banner1 from "../public/image/arma3-banner-1.png"
import banner2 from "../public/image/arma3.png"
import Slider from "./Slider"
import { FaYoutube, FaFacebookSquare } from "react-icons/fa"
import { SliderData } from "./SliderData"

const Hero = () => {
    return (
        <section className="overflow-hidden text-gray-700 ease-in duration-200 xl:mx-[15%] sm:mx-[10%] mx-5 sm:mt-20 mt-10 relative">
            <div className="container ease-in duration-200 relative">
                <div className=" flex flex-wrap sm:flex-nowrap ease-in duration-200 relative">
                    <div className="flex flex-wrap sm:w-3/4 w-full ease-in duration-200 sm:mr-2">
                        <div className="w-full ease-in duration-200 ">
                            <Slider slides={SliderData} />
                        </div>
                    </div>
                    <div className="flex sm:flex-wrap sm:w-1/4 w-full sm:ml-2 ease-in duration-200 carousel-indicators relative items-center justify-center mt-5 sm:mt-0 ">
                        <div className="w-full ease-in duration-200 basvuru-logo top-0 relative sm:h-1/2 h-[250px]">
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLSd85CP6VX77vAO_kv8PWzV1Y2pqLWHkMGP3dal-DA_xr6ptgQ/viewform"
                                target="_blank "
                                rel="noreferrer noopener "
                            >
                                <Image
                                    alt="gallery"
                                    layout="fill"
                                    className="carousel-indicators"
                                    src={banner1}
                                />
                            </a>
                        </div>
                        <div className="w-full ease-in duration-200 carousel-indicators bottom-0 relative sm:h-1/2 h-[250px]">
                            <div className="flex flex-col h-full justify-between">
                                <div className=" h-full  flex items-center">
                                    <a
                                        href="https://www.youtube.com/channel/UC_Uvv_IL575anmWhJGzfhSg"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        className="flex w-full items-center justify-center flex-col text-[#3A559F] hover:text-[#1178F2] hover:bg-slate-500/50 hover:rounded ease-in-out transition-all duration-200"
                                    >
                                        <FaFacebookSquare size={30} className="" />
                                        <div className="text-xl">Arma Turk Birlikleri</div>
                                    </a>
                                </div>
                                <div className=" h-full flex items-center w-full ">
                                    <a
                                        href="https://www.facebook.com/armaturkbirlikleri"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        className="flex w-full items-center justify-center flex-col  text-[#CE1A19] hover:text-[#FF0000] hover:bg-slate-500/50 hover:rounded ease-in-out transition-all duration-200"
                                    >
                                        <FaYoutube size={30} />
                                        <div className="text-xl">Arma Turk Birlikleri</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
