import {
    RiInstagramLine,
    RiFacebookLine,
} from "react-icons/ri";

const Footer = () => {
    return (
        <footer className="bg-footer p-8 xl:p-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-b-secondary pb-8">
                {/* Logo */}
                <div className="flex justify-center xl:w-1/6">
                    <div className="w-8 flex-none mr-2 md:w-10">
                        <img src="Logo.png" className="w-full" />
                    </div>
                    <a href="#" className="text-primary text-2xl md:text-3xl font-bold relative p-1">
                        MealSync
                    </a>
                </div>
                {/* Social media */}
                <nav className="flex items-center gap-4">
                    <a href="" target="_blank" className="block text-white p-2 bg-fb rounded-full">
                        <RiFacebookLine size={24} />
                    </a>
                    <a href="" target="_blank" className="block text-white p-2 bg-gradient-to-tr from-ig-from to-ig-mid rounded-full">
                        <RiInstagramLine size={24} />
                    </a>
                </nav>
            </div>
            <div className="mt-5">
                <nav className="mt-4 flex flex-col md:flex-row items-center justify-between gap-4">
                    <a
                        href="#aboutUs"
                        className="text-gray-300 mt-4 hover:text-primary transition-colors"
                    >
                        Về chúng tôi
                    </a>
                    <a
                        href="#"
                        className="text-gray-300 mt-4 hover:text-primary transition-color"
                    >
                        Điều khoản sử dụng
                    </a>
                    <a
                        href="#"
                        className="text-gray-300 mt-4 hover:text-primary transition-color"
                    >
                        Chính sách bảo mật
                    </a>
                    <button
                        type="button"
                        className="font-semibold mt-4 py-2 px-6 bg-primary text-white rounded-xl"
                    >
                        Liên hệ
                    </button>
                </nav>
            </div>
            <div className="mt-8">
                <p className="text-gray-300 text-center">
                    ©MealSync Team 2024 - All Rights Reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;
