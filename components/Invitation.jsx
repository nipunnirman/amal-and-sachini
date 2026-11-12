"use client"

import { useState, useEffect, useRef } from 'react'
import EnvelopeOverlay from './EnvelopeOverlay'
const monogram = "/assets/logo.png";
const floralBg = "/assets/realistic-wedding-flowers.png";
const bgMusic = "/assets/Christina_Perri_-_A_Thousand_years_instrumental_version_(mp3.pm).mp3";
import ButterflyFlight from './ButterflyFlight'

function Countdown() {
  const targetDate = new Date('2026-12-11T11:00:00+05:30').getTime()
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
      } else {
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="countdown-box">
      <h3 className="countdown-title">සාදයට තව ඇති කාලය</h3>
      <div className="timer">
        <div className="time-unit">
          <span className="time-val">{timeLeft.days}</span>
          <span className="time-lbl">දින</span>
        </div>
        <div className="time-unit">
          <span className="time-val">{timeLeft.hours}</span>
          <span className="time-lbl">පැය</span>
        </div>
        <div className="time-unit">
          <span className="time-val">{timeLeft.minutes}</span>
          <span className="time-lbl">මිනිත්තු</span>
        </div>
        <div className="time-unit">
          <span className="time-val">{timeLeft.seconds}</span>
          <span className="time-lbl">තත්පර</span>
        </div>
      </div>
    </div>
  )
}

function SvgIcon({ name }) {
  switch (name) {
    case 'drinks':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="timeline-svg-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9V5.25m3 3.75V5.25m-7.5 10.338c-1.12-.13-1.5-1.077-1.5-1.838a.75.75 0 01.75-.75h16.5a.75.75 0 01.75.75c0 .761-.38 1.708-1.5 1.838M3.75 6h16.5M12 15.75V21m-4.5 0h9M7.5 9.75L12 15.75l4.5-6" />
        </svg>
      )
    case 'entrance':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="timeline-svg-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      )
    case 'poruwa':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="timeline-svg-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
        </svg>
      )
    case 'register':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="timeline-svg-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
        </svg>
      )
    case 'photos':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="timeline-svg-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15a2.25 2.25 0 002.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
        </svg>
      )
    case 'brunch':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="timeline-svg-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      )
    case 'cake':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="timeline-svg-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.22.527a2.25 2.25 0 004.053 0l.22-.527M3.12 8.12a10.16 10.16 0 0017.76 0M12 3v3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75c-2.9 0-5.25 2.015-5.25 4.5h10.5c0-2.485-2.35-4.5-5.25-4.5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75c-1.8 0-3.25 1.343-3.25 3h6.5c0-1.657-1.45-3-3.25-3z" />
        </svg>
      )
    case 'departure':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="timeline-svg-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21m0 0l-.813-5.096M9 21h7.5M12 3v13.5m0-13.5L8.25 6.75M12 3l3.75 3.75" />
        </svg>
      )
    default:
      return null
  }
}

function TimelineItem({ item }) {
  const [isVisible, setIsVisible] = useState(false)
  const itemRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    const item = itemRef.current
    if (item) observer.observe(item)
    return () => observer.disconnect()
  }, [])

  return (
    <div 
      ref={itemRef} 
      className={`timeline-item ${isVisible ? 'pop-up' : 'hidden-down'}`}
    >
      <div className="timeline-badge">
        <SvgIcon name={item.icon} />
      </div>
      <div className="timeline-content">
        <span className="timeline-time">{item.time}</span>
        <h4 className="timeline-title">{item.title}</h4>
        <p className="timeline-desc">{item.desc}</p>
      </div>
    </div>
  )
}

function ProgramSchedule() {
  const schedule = [
    { time: "පෙ.ව. 11.00", title: "සාදය ආරම්භය", desc: "ඔබ සැමව ඉතා සාදරයෙන් පිළිගනිමු.", icon: "entrance" },
    { time: "ප.ව. 3.00", title: "සාදය අවසානය", desc: "අප සමග සතුට බෙදාගත් ඔබ සැමට හෘදයාංගම ස්තූතිය.", icon: "departure" }
  ]

  return (
    <div className="schedule-section">
      <div className="section-title-wrapper">
        <span className="section-subtitle">වේලාව</span>
        <h2 className="section-title">ප්‍රිය සාදය</h2>
      </div>
      <div className="timeline-container">
        {schedule.map((item, index) => (
          <TimelineItem key={index} item={item} />
        ))}
      </div>
    </div>
  )
}

function Home() {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [invitationRevealed, setInvitationRevealed] = useState(false)

  const handleEnvelopeOpen = () => {
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(e => console.error("Audio playback failed:", e));
    }
  };

  const toggleMusic = async () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch {
          setIsPlaying(false);
        }
      }
    }
  };

  return (
    <>
      <EnvelopeOverlay onOpen={handleEnvelopeOpen} onRevealed={setInvitationRevealed} />
      <audio ref={audioRef} src={bgMusic} loop />
      
      {/* Music Toggle Button */}
      <button 
        type="button"
        className={`music-toggle-btn ${isPlaying ? 'playing' : ''}`} 
        onClick={toggleMusic}
        title={isPlaying ? "Pause Music" : "Play Music"}
        aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
        aria-pressed={isPlaying}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
          {isPlaying ? (
            <path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z" />
          ) : (
            <path d="M3 9v6h4l5 5V4L7 9H3m13.6.2L15.2 10.6l2.4 2.4-2.4 2.4 1.4 1.4L19 14.4l2.4 2.4 1.4-1.4-2.4-2.4 2.4-2.4-1.4-1.4-2.4 2.4-2.4-2.4Z" />
          )}
        </svg>
      </button>

      <div className="wedding-card" id="invitation-content" tabIndex={-1}>
      {invitationRevealed && <ButterflyFlight />}
      <div className="decorations-bg-layer">
        
        <img src={floralBg} alt="" className="floral-bg-left" />
        <img src={floralBg} alt="" className="floral-bg-right" />
        <img src={floralBg} alt="" className="botanical-bottom" />
      </div>
      
      <div className="card-content">
        <img src={monogram} alt="Amal and Sachini logo" className="hero-monogram" />
        <h2 className="si-blessing">ශ්‍රී සුභ මංගලම්</h2>

        <div className="si-families">
          <div className="si-family">
            <p className="si-parents">
              තිසෝගම පදිංචි<br />
              <strong>R.M රන්ජිත් පුෂ්පකුමාර</strong><br />
              මහතාගේ සහ එම මැතිණියගේ ආදරණීය
            </p>
            <p className="si-relation">පුතනුවන්</p>
            <h1 className="si-name">අමල්</h1>
          </div>

          <div className="si-rings" aria-hidden="true">
            <svg viewBox="0 0 64 40" fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="24" cy="22" r="13" />
              <circle cx="40" cy="22" r="13" />
              <path d="M28 6l4-4 4 4-4 3z" />
            </svg>
          </div>

          <div className="si-family">
            <p className="si-parents">
              දුම්මලසූරිය පදිංචි<br />
              <strong>K. සරත් නිශාන්ත</strong><br />
              මහතාගේ සහ එම මැතිණියගේ ආදරණීය
            </p>
            <p className="si-relation">දියණිය</p>
            <h1 className="si-name">සචිනි</h1>
          </div>
        </div>

        <p className="si-text">සමග අතිනත ගෙන පැමිණීමේ ප්‍රීතිය නිමිත්තෙන්</p>

        <div className="venue-details si-day">සිකුරාදා</div>
        <div className="date-row">
          <div className="line"></div>
          <div className="date-main">
            <span className="date-month-year si-month">දෙසැම්බර්</span>
            <span className="date-number">11</span>
            <span className="date-month-year">2026</span>
          </div>
          <div className="line"></div>
        </div>

        <div className="venue-section">
          <p className="si-time">පෙ.ව. 11.00 සිට ප.ව. 3.00 දක්වා</p>
          <h3 className="venue-name si-venue">තිසෝගම, වෙලන්ගොල්ල අප නිවසේ</h3>
          <p className="si-text">
            පැවැත්වෙන ප්‍රිය සාදයට සහභාගී වන මෙන්<br />
            ඔබ සැමට කෙරෙන ගෞරවණීය ඇරයුමයි
          </p>
        </div>

        <Countdown />

        {/* New Program Schedule Timeline */}
        <ProgramSchedule />

        <div className="contact-bar"><p className="closing-note si-closing">ඔබගේ පැමිණීම අපට මහත් සතුටකි</p><span className="closing-date">A &amp; S · 11.12.2026</span></div>
      </div>
    </div>
    </>
  )
}

export default Home
