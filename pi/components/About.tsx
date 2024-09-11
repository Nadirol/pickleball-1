import Image from "next/image";
import { pickleballImage1 } from "../public/assets";

const About = () => {
    return (
        <div className="flex my-20 flex-col md:flex-row">
            <div className="flex-1">
                <Image src={pickleballImage1} alt="" />
            </div>
            <div className="flex-1 p-10 flex gap-8 flex-col">
                <h3 className="font-bold text-[2rem] leading-tight">Lorem ipsum</h3>
                <ul className="flex gap-4 flex-col text-gray-700">
                    <li>
                        <span className="font-bold">Lorem:</span> dolor 
                    </li>

                    <li>
                        <span className="font-bold">Ipsum:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit 
                    </li>

                    <li>
                        <span className="font-bold">Duis aute irure:</span> sed do eiusmod 
                    </li>

                    <li>
                        <span className="font-bold">Lorem:</span> 5 
                    </li>
                </ul>

                <p className="w-3/4 text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <p className="w-3/4 text-gray-700">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.                
                </p>
            </div>
        </div>
    )
}

export default About;