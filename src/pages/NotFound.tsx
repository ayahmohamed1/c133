import { useEffect } from 'react'

export default function NotFound() {
  useEffect(() => {
    document.title = 'Gift Not Found'
  }, [])

  return (
    <div
      className="not-found"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        padding: '20px',
        color: '#e2e8f0',
        background: '#050b14',
      }}
    >
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎁 Oops!</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>This gift link doesn't exist.</p>
      <p style={{ fontSize: '0.9rem', opacity: 0.6 }}>Check the link and try again.</p>
    </div>
  )
}
