import Image from "next/image";
import { headerBackground, logo } from "../public/assets";
import Link from "next/link";

const Header = () => {
    return (
        <div className="">
            <header className="relative z-30 flex flex-col justify-between pb-40 h-screen">
                <div className="absolute z-0 top-0 left-0 w-full h-screen overflow-hidden border-5 border-red-500">
                    <Image src={headerBackground} alt="background image" 
                    className="object-cover h-full xl:w-full blur-[1px]"/>
                </div>
                <div className="absolute z-[1] top-0 left-0 w-full h-screen bg-gradient-to-b from-cyan-500 to-transparent"></div>

                <div className="w-container mx-auto flex items-center justify-between relative z-10 py-8">
                    <div className="flex items-center gap-4">
                        <Image src={logo} alt="" className="w-10 h-10"/>
                        <h2 className="text-2xl font-bold text-white">Brand Name</h2>
                    </div>

                    <ul className="hidden md:flex gap-[2rem] w-[40%] items-center justify-end">
                        <li className="navlink-underline inline-block relative">
                            <Link href={`/about`} scroll={false} className="text-white font-bold">Sân Bóng</Link>
                        </li>

                        <li className="navlink-underline inline-block relative">
                            <Link href={`/contact`} scroll={false} className="text-white font-bold">Liên Hệ</Link>
                        </li>
                        
                        <li className="navlink-underline inline-block relative">
                            <Link href={`/book`} className="text-white font-bold [&:last-child]:mr-0">
                                Đặt Sân
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="relative z-10 w-container mx-auto">
                    <span className="text-xl text-white font-medium">Lorem ipsum</span>
                    <h3 className="text-[3rem] font-bold w-[35rem] text-white mb-4 max-w-[50%]">LOREM IPSUM DOLOR SIT AMET</h3>

                    <button className="bg-[#22c55e] px-12 py-4 text-white font-bold transition-all hover:bg-white hover:text-[#22c55e]">
                        Đặt Sân
                    </button>
                </div>
            </header>
        </div>
    )
};

export default Header;