import { Suspense, lazy } from 'react'
import { Navigate, createBrowserRouter } from 'react-router-dom'
import Layout from '@/views/layout'

const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Layout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="todoList" />, // 默认重定向到 todoList
      },
      {
        path: 'todoList',
        Component: lazy(() => import('@/views/todoList/index.tsx')),
      },
      {
        path: 'ticTacToe',
        Component: lazy(() => import('@/views/ticTacToe/index.tsx')),
      },
      {
        path: 'test',
        Component: lazy(() => import('@/views/test.tsx')),
      },
    ],
  },
])

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose())
}

export default router
