
"use client";

import { useMemo, useState } from "react";

import { IoCloseOutline, IoCubeOutline, IoSearchOutline } from "react-icons/io5";

import SidebarItem from "./SidebarItem";

interface MenuLink {
  text: string;
  link?: string;
}

interface MenuItem {
  text: string;
  link?: string;
  subMenu?: MenuLink[];
  secondLevelText?: MenuLink[];
  image?: string;
}

interface Props {
  isSideMenuOpen: boolean;
  setIsSideMenuOpen: (open: boolean) => void;
  menuItems: MenuItem[];
}

const Sidebar = ({ isSideMenuOpen, setIsSideMenuOpen, menuItems }: Props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = useMemo(() => {
    const normalize = (val?: string) => val?.toLowerCase().trim() || "";

    if (!searchTerm.trim()) return menuItems;

    return menuItems
      .map((item) => {
        const matchTop = normalize(item.text).includes(normalize(searchTerm));

        const subMenuMatches = item.subMenu?.filter((sub) =>
          normalize(sub.text).includes(normalize(searchTerm))
        );

        const secondMatches = item.secondLevelText?.filter((second) =>
          normalize(second.text).includes(normalize(searchTerm))
        );

        if (matchTop || subMenuMatches?.length || secondMatches?.length) {
          return {
            ...item,
            subMenu: subMenuMatches ?? item.subMenu,
            secondLevelText: secondMatches ?? item.secondLevelText,
          };
        }
        
        return null;
      })
      .filter(Boolean) as MenuItem[];
  }, [menuItems, searchTerm]);

  return (
    <div>
      {isSideMenuOpen && (
        <div
          className="fixed top-0 left-0 w-screen h-screen z-[100] bg-black opacity-30"
          onClick={() => setIsSideMenuOpen(false)}
        />
      )}

      <nav
        className={`fixed p-3 right-0 top-0 w-full md:w-[500px] h-screen bg-white z-[110] shadow-2xl transform transition-all duration-300 ${!isSideMenuOpen && "translate-x-full"}`}
      >
        <IoCloseOutline
          size={45}
          className="absolute top-5 right-5 cursor-pointer"
          onClick={() => setIsSideMenuOpen(false)}
        />

        <div className="relative mt-14">
          <IoSearchOutline size={20} className="absolute top-3 left-2" />
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            placeholder="Escribe para buscar..."
            className="w-full bg-gray-50 rounded pl-10 py-2 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-primary"
          />
        </div>

        <div className="flex flex-col gap-2 mt-3 overflow-auto max-h-[calc(100vh-160px)]">
          {filteredItems.map((item, i) => (
            <SidebarItem
              key={i}
              icon={<IoCubeOutline size={20} />}
              label={item.text}
              path={item.link || undefined}
              children={item.subMenu || item.secondLevelText}              
              closeSidebar={() => setIsSideMenuOpen(false)}
            />
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
