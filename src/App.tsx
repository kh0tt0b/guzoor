import { lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from './components/Layout'

const Home = lazy(() => import('./pages/Home').then((m) => ({ default: m.Home })))
const Martyrs = lazy(() =>
  import('./pages/Martyrs').then((m) => ({ default: m.Martyrs })),
)
const MartyrDetail = lazy(() =>
  import('./pages/MartyrDetail').then((m) => ({ default: m.MartyrDetail })),
)
const Forums = lazy(() =>
  import('./pages/Forums').then((m) => ({ default: m.Forums })),
)
const NotFound = lazy(() =>
  import('./pages/NotFound').then((m) => ({ default: m.NotFound })),
)

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="martyrs" element={<Martyrs />} />
        <Route path="martyrs/:martyrId" element={<MartyrDetail />} />
        <Route path="forums" element={<Forums />} />
        <Route path="religion" element={<Navigate to="/forums" replace />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
