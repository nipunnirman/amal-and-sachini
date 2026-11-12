"use client"

import { useState, useEffect } from 'react';
const floralBg = "/assets/realistic-wedding-flowers.png";
const logoImg = "/assets/logo.png";

function EnvelopeOverlay({ onOpen, onRevealed }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isUnmounted, setIsUnmounted] = useState(false);

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);
    onOpen?.();
  };

  useEffect(() => {
    if (!isOpen) return;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timer = setTimeout(() => {
      setIsUnmounted(true);
      onRevealed?.(true);
      document.getElementById('invitation-content')?.focus({ preventScroll: true });
    }, reducedMotion ? 200 : 4200);
    return () => clearTimeout(timer);
  }, [isOpen, onRevealed]);

  useEffect(() => {
    if (isUnmounted) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);
    return () => { document.body.style.overflow = previousOverflow; };
  }, [isUnmounted]);

  if (isUnmounted) return null;

  return (
    <div className={`envelope-overlay ${isOpen ? 'is-opening' : ''}`}>
      <header className="envelope-heading">
        <p className="envelope-eyebrow">A CELEBRATION OF LOVE</p>
        <h2>Amal <span>&amp;</span> Sachini</h2>
        <p className="envelope-date">11 DECEMBER 2026</p>
      </header>

      <div className={`envelope-wrapper ${isOpen ? 'open' : ''}`}>
        <div className="envelope-back" />
        <div className="envelope-letter" aria-hidden="true">
          <div className="envelope-card-preview">
            <img className="letter-monogram" src={logoImg} alt="" />
            <p>You are warmly invited</p>
            <span>Amal &amp; Sachini</span>
            <p className="letter-date">11 DECEMBER 2026</p>
            <img className="letter-flowers" src={floralBg} alt="" />
          </div>
        </div>
        <div className="flap flap-left" />
        <div className="flap flap-right" />
        <div className="flap flap-bottom" />
        <div className="flap flap-top" />
        <img src={floralBg} alt="" aria-hidden="true" className="envelope-flowers" />
        <button type="button" aria-label="Open wedding invitation" className="wax-seal" onClick={handleOpen} disabled={isOpen}>
          <img src={logoImg} alt="Amal and Sachini logo" className="wax-seal-logo" />
        </button>
      </div>

      <div className="envelope-footer">
        <button type="button" className="envelope-open-link" onClick={handleOpen} disabled={isOpen}>
          {isOpen ? 'Opening your invitation' : 'Open your invitation'} <span aria-hidden="true">↗</span>
        </button>
        <p>A beautiful day, made complete by you.</p>
      </div>
    </div>
  );
}

export default EnvelopeOverlay;
