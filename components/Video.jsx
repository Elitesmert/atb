import Image from "next/image"
import React from "react"
import PlayBtn from "./PlayBtn"

const Video = () => {
    return (
        <div id="video" className="mt-10 xl:h-[480px] lg:h-[360px] md:h-[240px] w-full relative ease-in-out duration-200" >
            <div className="flex items-center justify-center absolute w-full h-full z-[2] ease-in-out duration-200">
                <div className="btnContainer">
                    <a href="https://www.youtube.com/watch?v=llNx1kk41Nk&t" className="playBut" target="_blank" rel="noreferrer">
                        <span>
                            <PlayBtn />
                        </span>
                    </a>
                </div>

            </div>
            <video
                autoPlay
                loop
                muted
                className="w-full h-full object-cover blur ease-in-out duration-200"
            >
                <source src="video/video.mp4" type="video/mp4" />
            </video>
        </div>
    )
}

export default Video
