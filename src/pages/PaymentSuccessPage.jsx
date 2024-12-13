import { FaCircleCheck } from "react-icons/fa6";
import paymentImage from '../assets/payment.png';
import { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";

const PaymentSuccessPage = () => {
    const windowDimension = {
        width: window.innerWidth,
        height: window.innerHeight,
    };
    const [showConfetti, setShowConfetti] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
                setShowConfetti(false);
            }, 4000); // Delay hiding by 1 second for fade-out effect
        }, 4000); // Show confetti for 1 second

        setTimeout(() => {
            const urlParams = new URLSearchParams(window.location.search);
            const orderInfo = urlParams.get("vnp_OrderInfo");

            // Redirect if 'Deposit' is found in vnp_OrderInfo
            if (orderInfo && orderInfo.includes("Deposit")) {
                window.location.href = "https://meal-sync-web-shop.vercel.app/account-balance";
            }
        }, 4000)

        return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen bg-green/30">
            {showConfetti && (
                <ReactConfetti
                    width={windowDimension.width}
                    height={windowDimension.height}
                    className={`${fadeOut ? 'opacity-0 transition-opacity duration-1000' : ''
                        }`}
                />
            )}
            <div className="flex flex-col justify-center items-center max-w-lg p-6 mx-4 bg-white rounded-lg shadow-lg text-center">

                <h1 className="text-2xl lg:text-4xl font-bold text-green-600">Thanh toán thành công!</h1>
                <img
                    src={paymentImage}
                    className="h-[100px] xl:h-[200px] mt-4 xl:mt-8 object-cover"
                />
                <p className="mt-4 text-gray-600 lg:text-2xl xl:mt-8">
                    Cảm ơn bạn đã mua hàng. Thanh toán của bạn đã được xử lý thành công.
                </p>
            </div>
        </div>
    )
}

export default PaymentSuccessPage;