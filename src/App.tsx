import { useState, useCallback } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import GiftPage from './pages/GiftPage'
import NotFound from './pages/NotFound'
import CountdownPage from './pages/CountdownPage'

function isUnlocked(): boolean {
  // Keep unlocked across page refreshes once midnight has passed
  if (sessionStorage.getItem('unlocked') === 'true') return true
  return false
}

export default function App() {
  const [unlocked, setUnlocked] = useState<boolean>(isUnlocked)

  const handleUnlock = useCallback(() => {
    sessionStorage.setItem('unlocked', 'true')
    setUnlocked(true)
  }, [])

  if (!unlocked) {
    return <CountdownPage onUnlock={handleUnlock} />
  }

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/gift/aya" replace />} />
      <Route path="/gift/:id" element={<GiftPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
