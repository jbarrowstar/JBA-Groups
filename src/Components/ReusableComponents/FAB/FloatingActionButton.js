// FloatingActionButton.jsx
import { useState } from 'react';
import { BsChat, BsTelephone } from 'react-icons/bs';
import { MdEmail, MdAdd, MdClose } from 'react-icons/md';
import { FaComments } from 'react-icons/fa';
import { ImWhatsapp } from "react-icons/im";
import "./FloatingButton.css";


const FloatingActionButton=(()=>{
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
}

  return (
    <div className="floating-action-container">
      {/* Dropdown Menu Items */}
      {isOpen && (
        <div className="floating-menu">
        <button
        className="floating-button chat-button"
        onClick={() => window.location.href = "/contactus"}
      >
        <FaComments size={24} />
      </button>

  
      <button
        className="floating-button plus-button"
        onClick={() => window.open("https://wa.me/919108474111", "_blank")}
      >
        <ImWhatsapp size={24} />
      </button>


      <button
        className="floating-button mail-button"
        onClick={() => window.location.href = "mailto:info@jbas.co.in"}
      >
        <MdEmail size={24} />
      </button>

  
      <button
        className="floating-button phone-button"
        onClick={() => window.open("tel:+91-9108474111", "_blank")}
      >
        <BsTelephone size={24} />
      </button>
        </div>
      )}

      {/* Main Button */}
      <button 
        onClick={toggleMenu}
        className={`main-button ms-3 ${isOpen ? 'main-button-open' : ''}`}
      >
        {isOpen ? <MdClose size={28}  className='closeIcon'/> : <BsChat size={28}/>}
      </button>
    </div>
  );
}
)
export default FloatingActionButton