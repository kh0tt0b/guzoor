import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'

const Home = lazy(() => import('./pages/Home').then((m) => ({ default: m.Home })))
const Heroes = lazy(() =>
  import('./pages/Heroes').then((m) => ({ default: m.Heroes })),
)
const HeroDetail = lazy(() =>
  import('./pages/HeroDetail').then((m) => ({ default: m.HeroDetail })),
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
        <Route path="heroes" element={<Heroes />} />
        <Route path="heroes/:heroId" element={<HeroDetail />} />
        <Route path="religion" element={<Religion />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
