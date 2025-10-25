'use client';

import { setCookie } from "cookies-next/client";
import { useState } from "react";

interface Props {
    currentTab?: number;
    tabOptions?: number[];
}

const TabBar = ({tabOptions = [1,2,3,4], currentTab = 1}: Props) => {

const [selected, setSelected] = useState<number>(currentTab)

const onTabSelected = (tab: number) => {
    setSelected(tab)
    setCookie('selectedTab', tab.toString())
}
  return (
    <div className={`
        rounded-xl bg-gray-200 p-2 
        flex flex-row
    `}>
      
      {
        tabOptions.map(tab => (
            <div key={tab}>
                <input
                    checked={selected === tab} 
                    type="radio" 
                    id={tab.toString()} 
                    className="peer hidden" 
                    onChange={() => {}}
                />
                <label 
                    onClick={() => onTabSelected(tab)}
                    className="
                    transition-all
                    block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white px-4 py-2">
                {tab}
                </label>
            </div>
        ))
      }

    </div>
  )
}

export default TabBar