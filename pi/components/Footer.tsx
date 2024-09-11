import Link from "next/link";

const Footer = () => {
    return (
        <div className="bg-[#10b981] py-40">
            <div className="w-container mx-auto flex justify-between flex-col items-center md:items-start gap-10 text-center md:text-start md:flex-row">
                <div className="flex gap-6 flex-col">
                    <h3 className="font-bold text-xl text-white">We are the best pickleball club</h3>
                    <h4 className="text-gray-100 text-lg w-[16rem]">Inissimos ducimos qui blandiitis praesentium voluptatum deleniti.</h4>
                </div>

                <div className="flex gap-2 flex-col">
                    <h3 className="font-bold text-xl text-white">Liên Hệ</h3>
                    <h4 className="text-gray-100 text-lg">info@gmail.com</h4>

                    <h3 className="font-bold text-xl text-white">1 800 555 45 65</h3>
                </div>

                <div className="flex gap-2 flex-col">
                    <h3 className="font-bold text-xl text-white">Địa chỉ</h3>
                    <h4 className="text-gray-100 text-lg w-[20rem]">RPWC+QV4, Đ. Hiệp Bình, Hiệp Bình Phước, Thủ Đức, Hồ Chí Minh, Việt Nam</h4>
                </div>

                <div className="flex gap-6 flex-col">
                    <h3 className="font-bold text-xl text-white">Đường Dẫn</h3>

                    <ul className="flex gap-3 flex-col text-gray-100 text-lg">
                        <li>
                            <Link href={`/`}>Trang chủ</Link>
                        </li>

                        <li>
                            <Link href={`/`}>Sân bóng</Link>
                        </li>

                        <li>
                            <Link href={`/`}>Liên hệ</Link>
                        </li>

                        <li>
                            <Link href={`/`}>Đặt sân</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Footer;