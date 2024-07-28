import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
      <p>admin</p>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
