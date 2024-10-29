import { useState, useEffect } from "react";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [activeMenu, setActiveMenu] = useState("home");

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
        setShowMenu(false);
    };

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveMenu(entry.target.id);
                }
            });
        }, options);

        sections.forEach(section => {
            observer.observe(section);
        });

        return () => {
            sections.forEach(section => {
                observer.unobserve(section);
            });
        };
    }, []);

    return (
        <header className="navbar flex items-center justify-between xl:justify-start w-full">
            <div className="flex justify-center xl:w-1/6">
                <div className="w-8 flex-none mr-2 md:w-10">
                    <img src="Logo.png" className="w-full" />
                </div>
                <a href="#" className="text-primary text-2xl md:text-3xl font-bold relative p-1">
                    MealSync
                </a>
            </div>
            <nav
                className={`fixed text-2xl bg-white w-[80%] md:w-[40%] xl:w-full h-full ${showMenu ? "left-0" : "-left-full"
                    } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center xl:justify-start xl:ms-[18%] gap-10 transition-all duration-500 z-50`}
            >
                <a
                    href="#home"
                    className={`${activeMenu === "home" ? "text-primary" : ""} hover:text-primary`}
                    onClick={() => handleMenuClick("home")}
                >
                    Trang chủ
                </a>
                <a
                    href="#download"
                    className={`${activeMenu === "download" ? "text-primary" : ""} hover:text-primary`}
                    onClick={() => handleMenuClick("download")}
                >
                    Tải xuống
                </a>
                <a
                    href="#aboutUs"
                    className={`${activeMenu === "aboutUs" ? "text-primary" : ""} hover:text-primary`}
                    onClick={() => handleMenuClick("aboutUs")}
                >
                    Về chúng tôi
                </a>
            </nav>
            <button
                onClick={() => setShowMenu(!showMenu)}
                className="xl:hidden text-2xl p-2"
            >
                {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
            </button>
        </header>
    );
}

export default Navbar;