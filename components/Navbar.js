import React, { useState, useEffect } from "react"
import Link from "next/link"
import { IoMenu, IoLogoXing } from "react-icons/io5"
import Image from "next/image"
import atb from "../public/image/arma.png"

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [scrollNav, setScrollNav] = useState(false)
    const [color, setColor] = useState("transparent")
    const [textColor, setTextColor] = useState("white")

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 90) {
                setScrollNav(false)
                setColor("rgb(51, 96, 121,0.4)")
                setTextColor("#0a0b12")
            } else {
                setScrollNav(true)
                setColor("transparent")
                setTextColor("#e3e3e3")
            }
        }
        window.addEventListener("scroll", changeColor)
    }, [])

    return (
        <div
            style={{ backgroundColor: `${color}` }}
            className={
                scrollNav
                    ? "left-0 right-0 top-2  mx-[2%] sm:mx-[10%] z-10 ease-in duration-300 sticky rounded-2xl nav"
                    : "left-0 right-0 sm:top-2 top-0 sm:mx-[10%] z-10 ease-in duration-300 sticky sm:rounded-2xl nav"
            }
        >
            <div
                className={
                    scrollNav
                        ? "z-10 flex justify-between sm:justify-center items-center p-4 text-[#e3e3e3] bg-gray-300/10 rounded-2xl ease-in duration-300 nav-ust"
                        : "z-10 flex justify-between sm:justify-center items-center p-4 text-[#e3e3e3] bg-gray-300/10 sm:rounded-2xl ease-in duration-300 nav-ust sm:border-0 border-[#1f9dd9] border-b-2"

                }
            >
                <ul
                    style={{ color: `${textColor}` }}
                    className="hidden sm:flex sm:text-[14px] md:text-[16px] lg:text-[20px] xl:text-[22px] 2xl:text-[26px] w-full justify-between  lg:mx-6 md:mx-4 "
                >
                    <li className="py-2">
                        <Link href="/">ANASAYFA</Link>
                    </li>
                    <li className="p-2">
                        <Link href="/#gallery">GALERI</Link>
                    </li>
                    <li className="p-2 text-center">
                        <Link href="/work">BIZ KIMIZ</Link>
                    </li>
                    <li className="px-16 flex justify-center text-center">
                        <div className="absolute lg:w-36 md:w-32 sm:w-28 -top-[10px]">
                            <Link href="/login">
                                <Image src={atb} alt="arma" objectFit="cover" />
                            </Link>
                        </div>
                    </li>
                    <li className="p-2">
                        <Link href="/contact">KADROMUZ</Link>
                    </li>
                    <li className="p-2">
                        <Link href="/login">BASVURU</Link>
                    </li>
                    <li className="p-2 ">
                        <Link href="/login">GIRIS</Link>
                    </li>
                </ul>

                {/* Mobile Button */}
                <div className="sm:hidden h-20">
                    <div
                        className={
                            scrollNav
                                ? "absolute w-36 -top-2 ease-in duration-300"
                                : "absolute w-36 top-0 ease-in duration-300"
                        }
                    >
                        <Link href="/login">
                            <Image src={atb} alt="arma" objectFit="cover" />
                        </Link>
                    </div>
                </div>
                <div onClick={handleNav} className="block sm:hidden z-10">
                    {nav ? (
                        <IoLogoXing
                            size={30}
                            // style={{ color: `${textColor}` }}
                            className={
                                nav ? "mr-4 ease-in duration-300" : "mr-4 ease-in duration-300"
                            }
                        />
                    ) : (
                        <IoMenu
                            size={30}
                            //  style={{ color: `${textColor}` }}
                            className="mr-4 ease-in duration-300"
                        />
                    )}
                </div>
                {/* Mobile Menu */}
                <div
                    className={
                        nav
                            ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 mt-[140px] flex w-full h-screen  text-center mobile-div duration-500 transform-[scale(1.08)] transition-all"
                            : "sm:hidden absolute left-[-120%] mt-[140px] top-0  right-0 bottom-0 flex w-full h-screen  text-center mobile-div duration-500 transform-[scale(1.08)] transition-all"
                    }
                >
                    <ul className="w-full ">
                        <li
                            onClick={handleNav}
                            className={
                                scrollNav
                                    ? "bg-[rgb(51,96,121,0.5)] text-4xl my-2 rounded-[50px] duration-500 transform-[scale(1.08)] transition-all flex justify-center select-none"
                                    : "bg-[rgb(51,96,121,0.5)] ease-in duration-300 text-4xl my-2 flex justify-center select-none"
                            }
                        >
                            <Link href="/">
                                <a className="w-full h-full p-4 rounded-[50px]">ANASAYFA</a>
                            </Link>
                        </li>
                        <li
                            onClick={handleNav}
                            className={
                                scrollNav
                                    ? "bg-[rgb(51,96,121,0.5)] text-4xl my-2 rounded-[50px] ease-in duration-300 flex justify-center"
                                    : "bg-[rgb(51,96,121,0.5)] ease-in duration-300 text-4xl my-2 flex justify-center"
                            }
                        >
                            <Link href="/#gallery">
                                <a className="w-full h-full p-4 rounded-[50px]">GALERI</a>
                            </Link>
                        </li>
                        <li
                            onClick={handleNav}
                            className={
                                scrollNav
                                    ? "bg-[rgb(51,96,121,0.5)] text-4xl my-2 rounded-[50px] ease-in duration-300 flex justify-center"
                                    : "bg-[rgb(51,96,121,0.5)] ease-in duration-300 text-4xl my-2 flex justify-center"
                            }
                        >
                            <Link href="/work">
                                <a className="w-full h-full p-4 rounded-[50px]">BIZ KIMIZ</a>
                            </Link>
                        </li>
                        <li
                            onClick={handleNav}
                            className={
                                scrollNav
                                    ? "bg-[rgb(51,96,121,0.5)] text-4xl my-2 rounded-[50px] ease-in duration-300 flex justify-center"
                                    : "bg-[rgb(51,96,121,0.5)] ease-in duration-300 text-4xl my-2 flex justify-center"
                            }
                        >
                            <Link href="/contact">
                                <a className="w-full h-full p-4 rounded-[50px]">KADROMUZ</a>
                            </Link>
                        </li>
                        <li
                            onClick={handleNav}
                            className={
                                scrollNav
                                    ? "bg-[rgb(51,96,121,0.5)] text-4xl my-2 rounded-[50px] ease-in duration-300 flex justify-center"
                                    : "bg-[rgb(51,96,121,0.5)] ease-in duration-300 text-4xl my-2 flex justify-center"
                            }
                        >
                            <Link href="/contact">
                                <a className="w-full h-full p-4 rounded-[50px]">BASVURU</a>
                            </Link>
                        </li>
                        <li
                            onClick={handleNav}
                            className={
                                scrollNav
                                    ? "bg-[rgb(51,96,121,0.5)] text-4xl my-2 rounded-[50px] ease-in duration-300 flex justify-center"
                                    : "bg-[rgb(51,96,121,0.5)] ease-in duration-300 text-4xl my-2 flex justify-center"
                            }
                        >
                            <Link href="/contact">
                                <a className="w-full h-full p-4 rounded-[50px]">GIRIS</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
