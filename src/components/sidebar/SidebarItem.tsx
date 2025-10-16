'use client';
import Link from 'next/link';
import React from 'react'
import { SidebarIconProps } from './interfaces';
import { usePathname } from 'next/navigation';

const SidebarItem = ({icon, path, title} : SidebarIconProps) => {

    const currentPath = usePathname();

  return (
    <li>
      <Link
        href={path}
        className={`relative px-4 py-3 flex items-center space-x-4 rounded-xl text-gray-600 
        hover:bg-gradient-to-r hover:from-sky-600 hover:to-cyan-400 hover:text-white
        ${ currentPath === path ? 'text-white bg-gradient-to-r from-sky-600 to-cyan-400' : ''}
        `}
      >
        {icon}
        <span className="-mr-1 font-medium">{title}</span>
      </Link>
    </li>
  );
}

export default SidebarItem