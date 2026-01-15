// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const NavLink = ({ href, children }) => {
//   const pathname = usePathname();
//   const isActive = pathname === href;

//   return (
//     <Link
//       href={href}
//       className={`px-3 py-2 rounded-md font-medium transition-colors
//         ${
//           isActive
//             ? "text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 underline underline-offset-2 decoration-2 decoration-current"
//             : "text-gray-700 hover:text-blue-500"
//         }`}
//     >
//       {children}
//     </Link>
//   );
// };

// export default NavLink;
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`relative px-3 py-2 font-medium transition-colors
        ${
          isActive
            ? "text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500"
            : "text-gray-700 hover:text-blue-500"
        }`}
    >
      {children}
      {isActive && (
        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full"></span>
      )}
    </Link>
  );
};

export default NavLink;
