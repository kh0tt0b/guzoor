import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'

const Home = lazy(() => import('./pages/Home').then((m) => ({ default: m.Home })))
const Martyrs = lazy(() =>
  import('./pages/Martyrs').then((m) => ({ default: m.Martyrs })),
)
const MartyrDetail = lazy(() =>
  import('./pages/MartyrDetail').then((m) => ({ default: m.MartyrDetail })),
)
const Religion = lazy(() =>
  import('./pages/Religion').then((m) => ({ default: m.Religion })),
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
        <Route path="religion" element={<Religion />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
