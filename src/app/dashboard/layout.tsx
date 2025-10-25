import { Sidebar, TopMenu } from '@/components';

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sidebar/>
      {/* Main Layout content - Contenido principal del Layout */}
      <div className="ml-auto lg:w-[75%] xl:w-[80%] 2xl:w-[85%] min-h-screen bg-gray-200 mb-0">
        <TopMenu/>

        <div className='px-6 py-2 m-4 bg-white rounded'>
          {children}
        </div>
      </div>
    </>
  );
}