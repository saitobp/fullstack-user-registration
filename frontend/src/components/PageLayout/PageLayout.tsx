import { Outlet } from 'react-router-dom'
import { Header } from '~components/Header'

export function PageLayout() {
  return (
    <>
      <Header />

      <div className='p-4'>
        <Outlet />
      </div>
    </>
  )
}
