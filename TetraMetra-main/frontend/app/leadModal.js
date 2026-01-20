import ContactForm from "@/components/ContactForm";
import "../public/assets/css/modal.css";

export default function Modal({ isOpen, onClose }) {
    return (
        <dialog open={isOpen} className="custom-modal">
            <div 
                className="custom-modal-content"
                ref={node => {
                    if (node) {
                        node.style.setProperty("display", "flex", "important");
                        node.style.setProperty("position", "relative", "important");
                    }
                }}
            >
                <button 
                    className="custom-modal-close" 
                    onClick={onClose}
                    style={{
                        position: "absolute",
                        top: "16px",
                        right: "16px",
                        zIndex: 1000,
                        fontSize: "24px",
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        color: "#333"
                    }}
                >
                    &times;
                </button>
                
                <ContactForm />
            </div>
        </dialog>
    );
}
