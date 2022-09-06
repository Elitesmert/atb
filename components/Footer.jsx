import Link from "next/link"
import React from "react"
import { GrMapLocation } from "react-icons/gr"
import { GrPhone } from "react-icons/gr"
import { GrMailOption } from "react-icons/gr"
import { FaFacebookF } from "react-icons/Fa"
import atb from "../public/image/arma.png"
import Image from "next/image"

const Footer = () => {
    return (


        <footer className="footer-distributed">
            <div className="footer-left">
                <Link href="/">
                    <Image src={atb} alt="arma" objectFit="cover" width={100} height={100} />
                </Link>

                <p className="footer-links">
                    <Link href="/" className="link-1">
                        Anasayfa
                    </Link>
                    <Link href="/#video">Galeri</Link>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSd85CP6VX77vAO_kv8PWzV1Y2pqLWHkMGP3dal-DA_xr6ptgQ/viewform" target="_blank" rel="noreferrer">

                        Başvuru
                    </a>
                    <Link href="/">Giriş</Link>

                </p>

                <p className="footer-company-name">
                    <span>Arma Türk Birlikleri</span> &copy; {new Date().getFullYear()}
                </p>
            </div>

            <div className="footer-center">
                <div>
                    <div className="footer-center-icon-box mr-2">
                        <GrMapLocation />
                    </div>
                    <p>
                        <span>444 S. Cedros Ave</span> Solana Beach, California
                    </p>
                </div>

                <div>
                    <div className="footer-center-icon-box mr-2">
                        <GrPhone />
                    </div>
                    <p>+1.555.555.5555</p>
                </div>

                <div>
                    <div className="footer-center-icon-box mr-2">
                        <GrMailOption className="" />
                    </div>
                    <p>
                        <a href="mailhref:support@company.com">support@company.com</a>
                    </p>
                </div>
            </div>

            <div className="footer-right">
                <p className="footer-company-about">
                    <span>Şirketimiz Hakkında</span>
                    Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
                    euismod convallis velit, eu auchrefr lacus vehicula sit amet.
                </p>

                <div className="footer-icons">
                    <Link href="#" className="mx-1 rounded-[5px]">
                        <FaFacebookF className="icons" />
                    </Link>
                    <Link href="#" className="mx-1 rounded-[5px]">
                        <FaFacebookF className="icons" />
                    </Link>
                    <Link href="#" className="mx-1 rounded-[5px]">
                        <FaFacebookF className="icons" />
                    </Link>
                    <Link href="#" className="mx-1 rounded-[5px]">
                        <FaFacebookF className="icons" />
                    </Link>
                </div>
            </div>
        </footer>

    )
}


export default Footer
