import Image from "next/image"
import Link from "next/link"
import { CiBookmarkCheck, CiLogout } from "react-icons/ci"
import SidebarItem from "./SidebarItem"
import { SidebarIconProps } from "./interfaces"
import { IoCheckboxOutline, IoCodeOutline, IoListOutline } from "react-icons/io5"
import { GiClothes } from "react-icons/gi"

const sidebarItems: SidebarIconProps[] = [
    {
        icon: <CiBookmarkCheck size={30}/>,
        path: '/dashboard',
        title: 'Dashboard'
    },
    {
        icon: <IoCheckboxOutline size={30}/>,
        path: '/dashboard/rest-todos',
        title: 'Todos'
    },
    {
        icon: <IoListOutline size={30}/>,
        path: '/dashboard/server-todos',
        title: 'Server Actions'
    },
    {
      icon: <IoCodeOutline size={30}/>,
      path: '/dashboard/cookies',
      title: 'Cookies'
    }
    ,
    {
      icon: <GiClothes size={30}/>,
      path: '/dashboard/products',
      title: 'Products'
    }
]

const Sidebar = () => {
  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
            <div>
              <div className="-mx-6 px-6 py-4">
                <Link href="/dashboard/" title="home">
                  <Image
                    src="https://res.cloudinary.com/dqclkzb8r/image/upload/v1760131602/logo_d2ul18.png"
                    width={160}
                    height={160}
                    className="rounded-lg w-auto h-auto"
                    alt="tailus logo"
                  />
                </Link>
              </div>
    
              <div className="mt-8 text-center">
                <Image
                  src="https://res.cloudinary.com/dqclkzb8r/image/upload/v1760130885/Diogenes_Fermin_cqeycm.jpg"
                  height={280}
                  width={280}
                  alt=""
                  className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
                />
                <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
                  Diogenes Fermin
                </h5>
                <span className="hidden text-gray-400 lg:block">Programmer</span>
              </div>
    
              <ul className="space-y-2 tracking-wide mt-8"> 
                {
                    sidebarItems.map((item, i) => (
                      <SidebarItem {...item} key={i}/>
                    ))
                }
              </ul>
            </div>
    
            <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
              <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                <CiLogout />
                <span className="group-hover:text-gray-700">Logout</span>
              </button>
            </div>
          </aside>
  )
}

export default Sidebar