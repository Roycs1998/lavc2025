"use client";

import { useState, useEffect } from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";

import MenuItem from "@mui/material/MenuItem";

import { IoChevronDownOutline, IoChevronForwardOutline } from "react-icons/io5";

interface MenuLink {
    text: string;
    link?: string;
  }

  
interface MenuItem1 {
    text: string;
    link?: string;
    subMenu?: MenuLink[];
    secondLevelText?: MenuLink[];
    image?: string;
  }

interface SidebarItemProps {
    label: string;
    path?: string;
    icon: React.ReactNode;
    children?: MenuItem1[];
    forceExpand?: boolean;
    closeSidebar: () => void;
    searchTerm?: string;
    alwaysExpanded?: boolean;
}

const SidebarItem = ({
    label,
    icon,
    children,
    closeSidebar,
    path,
    forceExpand,
    searchTerm,
    alwaysExpanded = false,
}: SidebarItemProps) => {
    const pathname = usePathname();
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        if (alwaysExpanded) {
            setExpanded(true);

            return;
        }

        if (children?.some((child) => pathname.startsWith(child.link ?? ""))) {
            setExpanded(true);
        }
    }, [pathname, children, alwaysExpanded]);

    useEffect(() => {
        if (alwaysExpanded) {
            setExpanded(true);

            return;
        }

        if (forceExpand) {
            setExpanded(true);
        } else if (!forceExpand && children?.some((child) => pathname.startsWith(child.link ?? ""))) {
            setExpanded(false);
        } else if (!forceExpand && searchTerm === "") {
            setExpanded(false);
        }
    }, [pathname, children, forceExpand, searchTerm, alwaysExpanded]);

    const isActive = (path: string) => pathname === path;

    return (
        <div>
            <MenuItem
                component={path ? Link : "div"}
                href={path ?? "#"}
                onClick={() => {
                    if (path) {
                        closeSidebar();
                    } else if (children) {
                        setExpanded(!expanded);
                    }
                }}
                disableRipple
                disableGutters
                className={`flex items-center p-2 rounded transition-all m-0 group ${children && "cursor-pointer"} ${path && isActive(path) ? 'bg-backgroundDefault' : "hover:bg-backgroundDefault"}`}
            >
                {icon}
                <span className={`ml-3 text-lg font-medium`}>{label}</span>
                {children && !alwaysExpanded && (
                    <span className="ml-auto">
                        {expanded ? <IoChevronDownOutline /> : <IoChevronForwardOutline />}
                    </span>
                )}
            </MenuItem>

            {children && (
                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out h-full ${expanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="flex flex-col gap-1 mt-1 ml-4 border-l pl-4">
                        {children.map((child, idx) => (
                            <SidebarItem
                                key={idx}
                                label={child.text}
                                icon={undefined}
                                path={child.link}
                                children={child.subMenu}
                                closeSidebar={closeSidebar}
                                forceExpand={forceExpand}
                                searchTerm={searchTerm}                                
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SidebarItem;
