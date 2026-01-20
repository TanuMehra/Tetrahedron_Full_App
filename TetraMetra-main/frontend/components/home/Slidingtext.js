import Link from "next/link";
import { 
  FaCar, FaUtensils, FaTractor, FaBriefcaseMedical, FaShieldAlt, FaCapsules, 
  FaShippingFast, FaTv, FaPumpSoap, FaCube, FaIndustry, FaTshirt, 
  FaTools, FaShoePrints, FaFlask, FaGem, FaCogs, FaPrint, FaMicrochip, FaCouch 
} from "react-icons/fa";

const slidingItems = [
  { icon: <FaCar />, text: "Automotive & EV" },
  { icon: <FaUtensils />, text: "Food & Beverages" },
  { icon: <FaTractor />, text: "Farming Equipments" },
  { icon: <FaBriefcaseMedical />, text: "Medical Equipments" },
  { icon: <FaShieldAlt />, text: "Defense & P.S.E." },
  { icon: <FaCapsules />, text: "Pharmaceuticals" },
  { icon: <FaShippingFast />, text: "Logistics & Packaging" },
  { icon: <FaTv />, text: "Consumer Durables" },
  { icon: <FaPumpSoap />, text: "Personal Care & Body Products" },
  { icon: <FaCube />, text: "Plastics" },
  { icon: <FaIndustry />, text: "Steel & Steel Tube" },
  { icon: <FaTshirt />, text: "Textile & Garments" },
  { icon: <FaTools />, text: "Building Material" },
  { icon: <FaShoePrints />, text: "Leather Footwear" },
  { icon: <FaFlask />, text: "Chemical & Fertilizers" },
  { icon: <FaGem />, text: "Gems & Jewellery" },
  { icon: <FaCogs />, text: "Heavy Engineering" },
  { icon: <FaPrint />, text: "Printing & Publication" },
  { icon: <FaMicrochip />, text: "Electronics" },
  { icon: <FaCouch />, text: "Furniture HCP" },
];

export default function Slidingtext() {
  return (
    <section className="sliding-text sliding-text-two">
      <div className="sliding-text__inner">
        <ul className="sliding-text__list marquee_mode">
          {slidingItems.map((item, index) => (
            <li key={index} className="sliding-text__item">
              <Link href="#" className="sliding-text__icon">
                {item.icon}
              </Link>
              <Link href="#" className="sliding-text__text">
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
