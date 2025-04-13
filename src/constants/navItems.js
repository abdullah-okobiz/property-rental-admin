import { FaTachometerAlt } from "react-icons/fa";
import {
  FaUserShield,
  FaUserFriends,
  FaBlog,
  FaMoneyCheckAlt,
} from "react-icons/fa";
import {
  FiStar,
  FiLayers,
  FiHelpCircle,
  FiUsers,
  FiTarget,
  FiEye,
  FiThumbsUp,
  FiBriefcase,
  FiInfo,
  FiPhoneCall,
} from "react-icons/fi";
import { MdSettingsApplications } from "react-icons/md";
import { AiFillFileText } from "react-icons/ai";

export const menuItems = [
  { key: "dashboard", label: "Dashboard", icon: FaTachometerAlt },
  { key: "host-management", label: "Host Management", icon: FaUserShield },
  { key: "guest-management", label: "Guest Management", icon: FaUserFriends },
  { key: "blog-management", label: "Blog Management", icon: FaBlog },
  { key: "payment", label: "Payment", icon: FaMoneyCheckAlt },
  {
    key: "control-panel",
    label: "Control Panel",
    icon: MdSettingsApplications,
  },
  {
    key: "content_management",
    label: "Content Management",
    icon: AiFillFileText,
    children: [
      { key: "feature", label: "Feature", icon: FiStar },
      { key: "category", label: "Category", icon: FiLayers },
      { key: "faq", label: "FAQ", icon: FiHelpCircle },
      { key: "team_members", label: "Team Members", icon: FiUsers },
      { key: "mission", label: "Mission", icon: FiTarget },
      { key: "vision", label: "Vision", icon: FiEye },
      { key: "why_choose_us", label: "Why Choose Us", icon: FiThumbsUp },
      { key: "partners", label: "Partners", icon: FiBriefcase },
      { key: "about_us", label: "About Us", icon: FiInfo },
      { key: "contact_us", label: "Contact Us", icon: FiPhoneCall },
    ],
  },
];
