import { RiPlayFill } from "react-icons/ri";
import Popup from "./Popup";
import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dowload = () => {
    const [open, setOpen] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText("https://v-foody.s3.ap-southeast-1.amazonaws.com/v-foody.apk");
        toast.success('Đã sao chép!', {
            position: window.innerWidth > 768 ? "top-right" : "bottom-center",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    return (
        <>
            <ToastContainer />
            <section id="download" className="xl:min-h-[100vh] grid grid-cols-1 xl:grid-cols-8">
                {/* Image and Floating Information Card */}
                <div className="hidden xl:flex md:col-span-3 justify-center items-center relative">
                    {/* Content images */}
                    <img
                        src="ShopInfo.png"
                        className="w-[231px] h-[465px] 2xl:w-[231px] 2xl:h-[465px] object-cover"
                    />
                </div>
                {/* Information */}
                <div className="md:col-span-5 flex items-center justify-center p-8 xl:p-16">
                    <div className="flex flex-col gap-8">
                        <h1 className="text-5xl xl:text-6xl font-bold xl:leading-[7.5rem] flex flex-wrap items-center">
                            <span>
                                Tải&nbsp;
                            </span>
                            <div className="flex items-center">
                                <span className="text-primary py-2 pr-6 relative inline-block">
                                    MealSync
                                </span>
                                <div className="w-8 flex-none md:w-12">
                                    <img src="Logo.png" className="w-full" />
                                </div>
                            </div>
                        </h1>
                        <p className="text-gray-500 text-2xl leading-[2.5rem]">
                        Tại khu Ký túc xá Đại học Quốc gia TP.HCM, nhiều gian bếp chất lượng đang chờ bạn khám phá, trong khi không ít chiếc bụng đói hằng ngày phân vân tìm kiếm bữa ăn phù hợp với khung nhận hàng mong muốn. Đôi khi, phí giao hàng lại khiến việc đặt món trở nên kém tiện lợi. Với MealSync, chúng mình kết nối bạn với những bữa ăn chất lượng, tiện lợi và tối ưu cả về thời gian lẫn chi phí. Tải ứng dụng ngay để trải nghiệm!
                        </p>
                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <img
                                src="DownloadAndroid.png"
                                className="w-[231px] h-[100px] object-cover"
                                onClick={() => setOpen(true)}
                            />
                            <img
                                src="DownloadAppStore.png"
                                className="w-[231px] h-[100px] object-cover"
                                onClick={() => setOpen(true)}
                            />

                            <Popup open={open} onClose={() => setOpen(false)}>
                                <div className="w-72 h-[500px] xl:w-full xl:h-full">
                                    <div className="mx-auto my-4 w-full">
                                        <h1 className="text-primary text-3xl font-bold">Tải xuống MealSync</h1>
                                        <p className="text-xl">
                                            Hãy quét mã QR này trên điện thoại của bạn hoặc sao chép để khám phá ứng dụng MealSync ngay bây giờ và bắt đầu hành trình ẩm thực tuyệt vời!
                                        </p>
                                    </div>
                                    <div className="flex justify-center">
                                        <img
                                            src="download.png"
                                            className="w-[250px] h-[250px] xl:w-[500px] xl:h-[500px] object-cover"
                                            onClick={() => setOpen(true)}
                                        />
                                    </div>
                                    <div className="flex justify-center mt-4">
                                        <input
                                            type="text"
                                            value="Link Download"
                                            readOnly
                                            className="border p-2 w-full text-center"
                                            onClick={(e) => e.target.select()}
                                        />
                                        <button
                                            className="ml-2 p-2 border"
                                            onClick={handleCopy}
                                        >
                                            <FaRegCopy />
                                        </button>
                                    </div>
                                </div>
                            </Popup>

                            <button className="flex items-center text-left gap-4 py-2 px-8 rounded-xl text-xl">
                                <RiPlayFill className="bg-secondary text-primary p-4 rounded-full box-content" />{" "}
                                Xem video <br /> hướng dẫn
                            </button>
                        </div>
                    </div>
                </div>

            </section>
        </>


    )
}

export default Dowload;