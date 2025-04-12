import { FaTachometerAlt } from "react-icons/fa";
import {
  FaUserShield,
  FaUserFriends,
  FaBlog,
  FaMoneyCheckAlt,
} from "react-icons/fa";
import { MdSettingsApplications } from "react-icons/md";
import { AiFillFileText } from "react-icons/ai";

export const menuItems = [
  { key: "dashboard", label: "Dashboard", icon: FaTachometerAlt },
  { key: "host_management", label: "Host Management", icon: FaUserShield },
  { key: "guest_management", label: "Guest Management", icon: FaUserFriends },
  { key: "blog_management", label: "Blog Management", icon: FaBlog },
  { key: "payment", label: "Payment", icon: FaMoneyCheckAlt },
  {
    key: "control_panel",
    label: "Control Panel",
    icon: MdSettingsApplications,
  },
  {
    key: "content_management",
    label: "Content Management",
    icon: AiFillFileText,
  },
];
