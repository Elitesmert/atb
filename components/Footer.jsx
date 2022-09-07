import Link from "next/link"
import React from "react"
import { GrMapLocation } from "react-icons/gr"
import { GrPhone } from "react-icons/gr"
import { GrMailOption } from "react-icons/gr"
import { FaYoutube, FaFacebookSquare } from "react-icons/fa"
import { HiPhone, HiMail } from "react-icons/hi"
import atb from "../public/image/arma.png"
import Image from "next/image"

const Footer = () => {
    return (
        <footer className="w-full mt-20 mb-0 bg-[rgba(28,35,49,0.4)] relative">
            <div className="relative">
                <div className="footer-top p-2 bg-[rgba(51,96,121,0.2)] flex items-center justify-between font-semibold">
                    <div className="ml-4">
                        <span>Sosyal medya hesapları:</span>
                    </div>
                    <div className="flex">
                        <a
                            href="https://www.facebook.com/armaturkbirlikleri"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <FaFacebookSquare size={20} className="mr-4" />
                        </a>
                        <a
                            href="https://www.youtube.com/channel/UC_Uvv_IL575anmWhJGzfhSg"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <FaYoutube size={20} className="mr-4" />
                        </a>
                    </div>
                </div>
                <div className="footer-mid grid sm:grid-cols-3 mx-[15%] my-5">
                    <div className="sol flex flex-col sm:mr-8">
                        <div className="mb-4">
                            <h6 className="font-semibold ml-1">Arma Türk Birlikleri</h6>
                            <hr className="ml-2 mr-auto w-[100px] border-[2px] rounded border-[rgba(51,96,121,0.4)]" />
                        </div>
                        <p>

                        </p>
                    </div>
                    <div className="orta sm:mr-8">
                        <div className="mb-4">
                            <h6 className="font-semibold ml-1">Kullanışlı Bağlantılar</h6>
                            <hr className="ml-2 mr-auto w-[100px] border-[2px] rounded border-[rgba(51,96,121,0.4)]" />
                        </div>
                        <div className="flex sm:flex-col justify-center">
                            <Link href="/">
                                <a className="mx-2 px-2 my-1 hover:bg-slate-500/50 hover:rounded ease-in-out transition-all duration-200">Anasayfa</a>
                            </Link>
                            <Link href="/#video">
                                <a className="mx-2 px-2 my-1 hover:bg-slate-500/50 hover:rounded ease-in-out transition-all duration-200">Galeri</a>
                            </Link>
                            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSd85CP6VX77vAO_kv8PWzV1Y2pqLWHkMGP3dal-DA_xr6ptgQ/viewform" >
                                <a target="_blank" rel="noreferrer noopener" className="mx-2 px-2 my-1 hover:bg-slate-500/50 hover:rounded ease-in-out transition-all duration-200">Başvuru</a>
                            </Link>
                        </div>
                    </div>
                    <div className="sag sm:mr-8 ">
                        <div className="mb-4">
                            <h6 className="font-semibold ml-1">İletişim</h6>
                            <hr className="ml-2 mr-auto w-[100px] border-[2px] rounded border-[rgba(51,96,121,0.4)]" />
                        </div>
                        {/* <div className="flex items-center mx-2 my-4">
                            <HiPhone size={20} />
                            <a href="" className="ml-2">telefon numarası eklenicek</a>
                        </div> */}
                        <div className="flex items-center mx-2 my-4">
                            <HiMail size={20} />
                            <a href="mailto:armaturkbirlikleri@gmail.com" className="ml-2">armaturkbirlikleri@gmail.com</a>
                        </div>
                    </div>
                </div>
                <div className="footer-bot p2 bg-[rgba(28,35,49,0.2)]">
                    <div className="flex justify-center">
                        &copy; 2021-{new Date().getFullYear()}&nbsp;
                        <Link href="/">
                            <a className="font-bold ">Arma Türk Birlikleri</a>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
