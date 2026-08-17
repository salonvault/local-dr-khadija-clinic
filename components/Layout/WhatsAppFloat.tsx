import { FaWhatsapp } from "react-icons/fa6";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/923124039999"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp Doctor Khadija Clinic"
      className="whatsapp-float"
    >
      <span className="whatsapp-wave" />
      <span className="whatsapp-wave whatsapp-wave-delay" />
      <FaWhatsapp className="relative z-10 h-6 w-6 text-white md:h-7 md:w-7" />
    </a>
  );
}
