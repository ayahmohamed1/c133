import { Routes, Route, Navigate } from 'react-router-dom'
import GiftPage from './pages/GiftPage'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/gift/aya" replace />} />
      <Route path="/gift/:id" element={<GiftPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
