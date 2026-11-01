import { useEffect, useState } from 'react'

interface TimeLeft {
  hours: number
  minutes: number
  seconds: number
}

function getTimeUntilMidnight(): TimeLeft {
  const now = new Date()
  const midnight = new Date()
  midnight.setHours(24, 0, 0, 0)
  const diff = midnight.getTime() - now.getTime()

  const hours = Math.floor(diff / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)

  return { hours, minutes, seconds }
}

function isMidnight(): boolean {
  const now = new Date()
  return now.getHours() === 0 && now.getMinutes() === 0
}

export default function CountdownPage({ onUnlock }: { onUnlock: () => void }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeUntilMidnight())
  const [particles] = useState(() =>
    Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.6 + 0.1,
      delay: Math.random() * 4,
      duration: Math.random() * 3 + 2,
    }))
  )

  useEffect(() => {
    const tick = () => {
      if (isMidnight()) {
        onUnlock()
        return
      }
      setTimeLeft(getTimeUntilMidnight())
    }

    // check immediately
    if (isMidnight()) {
      onUnlock()
      return
    }

    const interval = setInterval(tick, 1000)
    return () => clearInterval(interval)
  }, [onUnlock])

  const pad = (n: number) => String(n).padStart(2, '0')

  return (
    <div className="countdown-page">
      {/* background grid */}
      <div className="countdown-grid-overlay" />

      {/* stars */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="star-particle"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}

      {/* corner decorations */}
      <div className="corners-overlay">
        <div className="corner tl" />
        <div className="corner tr" />
        <div className="corner bl" />
        <div className="corner br" />
      </div>

      {/* side text */}
      <div className="side-text left" style={{ left: 28 }}>COMING SOON</div>
      <div className="side-text right" style={{ right: 28 }}>SOMETHING SPECIAL</div>

      {/* main content */}
      <div className="countdown-content">
        <p className="countdown-eyebrow">✦ SOMETHING SPECIAL IS WAITING ✦</p>

        <h1 className="countdown-title">
          Almost<br /><span>Time</span>
        </h1>

        <p className="countdown-subtitle">
          Your surprise unlocks at midnight.<br />
          Just a little patience, love. 🌙
        </p>

        {/* timer */}
        <div className="countdown-timer">
          <div className="timer-block">
            <div className="timer-value">{pad(timeLeft.hours)}</div>
            <div className="timer-label">Hours</div>
          </div>
          <div className="timer-sep">:</div>
          <div className="timer-block">
            <div className="timer-value">{pad(timeLeft.minutes)}</div>
            <div className="timer-label">Minutes</div>
          </div>
          <div className="timer-sep">:</div>
          <div className="timer-block">
            <div className="timer-value">{pad(timeLeft.seconds)}</div>
            <div className="timer-label">Seconds</div>
          </div>
        </div>

        <div className="countdown-dots">· · ·</div>
        <p className="countdown-hint">The wait will be worth it 🎁</p>
      </div>
    </div>
  )
}

