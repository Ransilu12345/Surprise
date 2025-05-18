'use client';

import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from '@react-hook/window-size';
import { useRouter } from 'next/navigation';
import './envelop.css';

const EnvelopePopup = () => {
  const [showEnvelope, setShowEnvelope] = useState(false);
  const [openEnvelope, setOpenEnvelope] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [width, height] = useWindowSize();
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => setShowEnvelope(true), 2000); // Show envelope after 2 seconds
    return () => clearTimeout(timer);
  }, []);

  const handleOpen = () => {
    setOpenEnvelope(true);
    setShowConfetti(true);

    // Stop confetti after 5 seconds
    setTimeout(() => {
      setShowConfetti(false);
    }, 5000);

    // Redirect after 60 seconds
    setTimeout(() => {
      router.push('/main');
    }, 60000);
  };

  return (
    <div className="envelope-container">
      {showConfetti && <Confetti width={width} height={height} />}
      
      {showEnvelope && (
        <div className={`envelope ${openEnvelope ? 'open' : ''}`} onClick={handleOpen}>
          <div className="top-flap"></div>
          <div className="body"></div>
          <div className="letter">
          <p>Happy Bornday Pawani! 🎂💖<br />Wishing you lots of success and happiness always!
May every little step you take bring you closer to your biggest dreams. ✨🪄💫</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnvelopePopup;
