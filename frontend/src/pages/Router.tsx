import { Suspense, lazy } from 'react'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { PageLayout } from '~components/PageLayout'
import { PageLoader } from '~components/PageLoader'

const UserForm = lazy(() => import('./UserForm'))
const UserList = lazy(() => import('./UserList'))

const router = createBrowserRouter([
  {
    element: <PageLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to='users' />,
      },
      {
        path: 'users',
        element: (
          <Suspense fallback={<PageLoader />}>
            <UserList />
          </Suspense>
        ),
        children: [
          {
            path: 'new',
            element: (
              <Suspense fallback={<PageLoader />}>
                <UserForm mode='create' />
              </Suspense>
            ),
          },
          {
            path: 'edit/:id',
            element: (
              <Suspense fallback={<PageLoader />}>
                <UserForm mode='edit' />
              </Suspense>
            ),
          },
          {
            path: 'view/:id',
            element: (
              <Suspense fallback={<PageLoader />}>
                <UserForm mode='view' />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
])

export function Router() {
  return <RouterProvider router={router} />
}
