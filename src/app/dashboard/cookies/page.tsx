import { TabBar } from "@/components";
import { cookies } from "next/headers";

export const metadata = {
 title: 'Cookies Page',
 description: 'SEO Title',
};

const page = async() => {
  const cookieStore = await cookies();
  const cookieTab = Number(cookieStore.get('selectedTab')?.value ?? '1');

  return (
    <div className="flex justify-start p-3">
        <div className="flex flex-col gap-4">
            <span className="text-3xl">Tabs </span>
            <TabBar currentTab={cookieTab}/>
        </div>

    </div>
  )
}

export default page