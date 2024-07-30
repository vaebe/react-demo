import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className='h-screen w-screen bg-gray-100'>
      <div className='h-[48px] flex items-center bg-white'>
      <p className='text-2xl '>react demo</p>
      </div>
     
      <div>
        <Outlet />
      </div>
    </div>
  )
}
