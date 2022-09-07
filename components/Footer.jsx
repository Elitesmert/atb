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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
                            autem cum? Est porro nesciunt maiores doloribus iste a excepturi
                            repellat facere deserunt vero distinctio dolore nihil rerum modi,
                            libero minima.
                        </p>
                    </div>
                    <div className="orta sm:mr-8">
                        <div className="mb-4">
                            <h6 className="font-semibold ml-1">Kullanışlı Bağlantılar</h6>
                            <hr className="ml-2 mr-auto w-[100px] border-[2px] rounded border-[rgba(51,96,121,0.4)]" />
                        </div>
                        <div className="flex flex-col ">
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
                        <div className="flex items-center mx-2 my-4">
                            <HiPhone size={20} />
                            <a href="" className="ml-2">telefon numarası eklenicek</a>
                        </div>
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
        // <footer className="footer-distributed">
        //     <div className="footer-left">
        //         <Link href="/">
        //             <Image src={atb} alt="arma" objectFit="cover" width={100} height={100} />
        //         </Link>

        //         <p className="footer-links">
        //             <Link href="/" className="link-1">
        //                 Anasayfa
        //             </Link>
        //             <Link href="/#video">Galeri</Link>
        //             <a href="https://docs.google.com/forms/d/e/1FAIpQLSd85CP6VX77vAO_kv8PWzV1Y2pqLWHkMGP3dal-DA_xr6ptgQ/viewform" target="_blank" rel="noreferrer noopener ">
        //                 Başvuru
        //             </a>
        //             <Link href="/">Giriş</Link>

        //         </p>

        //         <p className="footer-company-name">
        //             <span>Arma Türk Birlikleri</span> &copy; {new Date().getFullYear()}
        //         </p>
        //     </div>

        //     <div className="footer-center">
        //         <div>
        //             <div className="footer-center-icon-box mr-2">
        //                 <GrMapLocation />
        //             </div>
        //             <p>
        //                 <span>444 S. Cedros Ave</span> Solana Beach, California
        //             </p>
        //         </div>

        //         <div>
        //             <div className="footer-center-icon-box mr-2">
        //                 <GrPhone />
        //             </div>
        //             <p>+1.555.555.5555</p>
        //         </div>

        //         <div>
        //             <div className="footer-center-icon-box mr-2">
        //                 <GrMailOption className="" />
        //             </div>
        //             <p>
        //                 <a href="mailhref:support@company.com">support@company.com</a>
        //             </p>
        //         </div>
        //     </div>

        //     <div className="footer-right">
        //         <p className="footer-company-about">
        //             <span>Şirketimiz Hakkında</span>
        //             Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
        //             euismod convallis velit, eu auchrefr lacus vehicula sit amet.
        //         </p>

        //         <div className="footer-icons">

        //         </div>
        //     </div>
        // </footer>
    )
}

export default Footer
