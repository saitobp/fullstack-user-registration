import { Outlet } from 'react-router-dom'

export function UserList() {
  return (
    <>
      <div className='flex items-center justify-between'>
        <h1 className='text-xl'>User List</h1>

        <button className='p-2 bg-slate-900 text-white w-20'>New</button>
      </div>

      <Outlet />
    </>
  )
}
