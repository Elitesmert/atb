import Image from "next/image"
import React, { useState } from "react"
import atb from "../public/image/arma.png"
import Input from "./Input"
import Link from "next/link"
import { useAuth } from "./AuthContext"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    const [isLoggingIn, setIsLoggingIn] = useState(true)


    const { login, currentUser } = useAuth()

    const enable = email && password

    async function submitHandler() {
        if (!email || !password) {
            return
        }
        if (isLoggingIn) {
            try {
                await login(email, password)
            } catch (err) {
                setError("Yanlis kullanici adi veya sifre")
            }
            return
        }
    }

    return (
        <div className="flex items-center justify-center mt-20">
            <div
                className=" w-[800px] h-[500px]  rounded-[8px] relative overflow-hidden back-animasyon
            before:absolute before:w-[800px] before:h-[500px] before:bg-gradient-to-b before:from-kirmizi2 before:via-kirmizi2 before:to-transparent before:animate-[don_6s_linear_infinite] before:-top-[50%] before:-left-[50%] before:origin-bottom-right"
            >

                <div className=" bg-[#1b1b1b] absolute z-[1] flex inset-1 rounded-[8px] ">

                    <div className=" flex items-center z-[2] w-96 justify-center">
                        <Image
                            src={atb}
                            alt="arma"
                            width={200}
                            height={200}
                            objectFit="cover"
                        />
                    </div>

                    <div className="w-[1px] bg-black"></div>

                    <div className="w-full inset-1 flex flex-col justify-center z-[2] px-10">
                        <div className="grid gap-y-10 relative">

                            {error && <div className="absolute w-full flex justify-center -top-16">
                                <div className='w-full max-w-[40ch] border-rose-400 border text-center border-solid text-rose-400 py-2'>{error}</div>
                            </div>
                            }

                            <Input
                                type="text"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                label="E-posta"
                            />
                            <Input
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                label="sifre"
                            />
                            <button
                                type="submit"
                                disabled={!enable}
                                onClick={submitHandler}
                                className="h-[38px] bg-mavi2 text-white rounded disabled:opacity-20"
                            >
                                Giris Yap
                            </button>

                            <Link href="./profile" >
                                <a className="flex justify-center items-center text-mavi1 font-semibold">
                                    Şifremi Unuttum?
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Login
