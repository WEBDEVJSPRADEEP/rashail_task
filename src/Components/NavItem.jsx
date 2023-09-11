// import React, { useState } from "react";
// import {
//   MdOutlineKeyboardArrowRight,
//   MdOutlineKeyboardArrowDown,
// } from "react-icons/md";

// export default function NavItem({
//   onClick,
//   active,
//   icon,
//   text,
//   isSettings,
//   dropdownItems,
// }) {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [activeDropdownItem, setActiveDropdownItem] = useState(null);

//   const handleItemClick = () => {
//     if (isSettings) {
//       setIsDropdownOpen(!isDropdownOpen);
//     } else {
//       onClick();
//     }
//   };

//   const handleDropdownItemClick = (item) => {
//     setActiveDropdownItem(item);
//   };

//   return (
//     <div
//       onClick={handleItemClick}
//       className={`nav-item ${active ? "active" : ""}`}
//     >
//       <i>{icon}</i>
//       <span className="text">{text}</span>
//       {!isSettings && (
//         <span>
//           <MdOutlineKeyboardArrowRight />
//         </span>
//       )}
//       {isSettings && (
//         <span>
//           {isDropdownOpen ? (
//             <MdOutlineKeyboardArrowDown />
//           ) : (
//             <MdOutlineKeyboardArrowRight />
//           )}
//         </span>
//       )}
//       {isSettings && isDropdownOpen && (
//         <div className="dropdown-content">
//           {dropdownItems.map((item, index) => (
//             <p
//               key={index}
//               onClick={() => handleDropdownItemClick(item)}
//               className={activeDropdownItem === item ? "active" : ""}
//             >
//               {item}
//             </p>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
