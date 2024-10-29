import { IoClose } from "react-icons/io5";

const Popup = ({ open, onClose, children }) => {
  return (
    <div
      onClick={onClose}
      className={`
        fixed inset-0 flex justify-center items-center transition-colors z-40
        ${open ? "visible bg-black/20" : "invisible"}
      `}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          bg-white rounded-xl shadow p-6 transition-all
          ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
        `}
      >
        <button
          onClick={onClose}
          className="absolute xl:text-3xl top-2 right-2 p-1 rounded-lg text-dark-grey bg-white hover:bg-gray-50 hover:text-primary"
        >
          <IoClose />
        </button>
        {children}
      </div>
    </div>
  )
}

export default Popup;