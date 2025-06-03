'use client';

import './surprise.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SurprisePage() {
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [countdown, setCountdown] = useState(5); // Timer starts at 5 seconds
  const router = useRouter();


  useEffect(() => {
    // Start the countdown timer
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval); // Stop the timer when it reaches 0
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    // Redirect to the main page after 2 minutes (120,000 ms)
    const timer = setTimeout(() => {
      setIsRedirecting(true); // Show the "Redirecting" message
      setTimeout(() => {
        router.push('/envelop'); // Redirect to the main page
      }, 1000); // Wait 1 second before redirecting
    }, 5000);

    // Cleanup the timer when the component unmounts
    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [router]);

  return (
    <div className="surprise-page">
      <div className="night">

      {/* Countdown Timer */}
      <div className="countdown-timer text-white">
        <p>Redirecting in {countdown} seconds...</p>
      </div>

            {/* Show "Redirecting" message when isRedirecting is true */}
        {isRedirecting && (
        <div className="redirecting-message">
          <p>Redirecting...</p>
        </div>
      )}

      </div>
      <div className="flowers">
        <div className="flower flower--1">
          <div className="flower__leafs flower__leafs--1">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__white-circle"></div>

            <div className="flower__light flower__light--1"></div>
            <div className="flower__light flower__light--2"></div>
            <div className="flower__light flower__light--3"></div>
            <div className="flower__light flower__light--4"></div>
            <div className="flower__light flower__light--5"></div>
            <div className="flower__light flower__light--6"></div>
            <div className="flower__light flower__light--7"></div>
            <div className="flower__light flower__light--8"></div>
          </div>
          <div className="flower__line">
            <div className="flower__line__leaf flower__line__leaf--1"></div>
            <div className="flower__line__leaf flower__line__leaf--2"></div>
            <div className="flower__line__leaf flower__line__leaf--3"></div>
            <div className="flower__line__leaf flower__line__leaf--4"></div>
            <div className="flower__line__leaf flower__line__leaf--5"></div>
            <div className="flower__line__leaf flower__line__leaf--6"></div>
          </div>
        </div>

        <div className="flower flower--2">
          <div className="flower__leafs flower__leafs--2">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__white-circle"></div>

            <div className="flower__light flower__light--1"></div>
            <div className="flower__light flower__light--2"></div>
            <div className="flower__light flower__light--3"></div>
            <div className="flower__light flower__light--4"></div>
            <div className="flower__light flower__light--5"></div>
            <div className="flower__light flower__light--6"></div>
            <div className="flower__light flower__light--7"></div>
            <div className="flower__light flower__light--8"></div>
          </div>
          <div className="flower__line">
            <div className="flower__line__leaf flower__line__leaf--1"></div>
            <div className="flower__line__leaf flower__line__leaf--2"></div>
            <div className="flower__line__leaf flower__line__leaf--3"></div>
            <div className="flower__line__leaf flower__line__leaf--4"></div>
          </div>
        </div>

        <div className="flower flower--3">
          <div className="flower__leafs flower__leafs--3">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__white-circle"></div>

            <div className="flower__light flower__light--1"></div>
            <div className="flower__light flower__light--2"></div>
            <div className="flower__light flower__light--3"></div>
            <div className="flower__light flower__light--4"></div>
            <div className="flower__light flower__light--5"></div>
            <div className="flower__light flower__light--6"></div>
            <div className="flower__light flower__light--7"></div>
            <div className="flower__light flower__light--8"></div>
          </div>
          <div className="flower__line">
            <div className="flower__line__leaf flower__line__leaf--1"></div>
            <div className="flower__line__leaf flower__line__leaf--2"></div>
            <div className="flower__line__leaf flower__line__leaf--3"></div>
            <div className="flower__line__leaf flower__line__leaf--4"></div>
          </div>
        </div>

        <div className="grow-ans" style={{ "--d": "1.2s" } as React.CSSProperties}>
          <div className="flower__g-long">
            <div className="flower__g-long__top"></div>
            <div className="flower__g-long__bottom"></div>
          </div>
        </div>

        <div className="growing-grass">
          <div className="flower__grass flower__grass--1">
            <div className="flower__grass--top"></div>
            <div className="flower__grass--bottom"></div>
            <div className="flower__grass__leaf flower__grass__leaf--1"></div>
            <div className="flower__grass__leaf flower__grass__leaf--2"></div>
            <div className="flower__grass__leaf flower__grass__leaf--3"></div>
            <div className="flower__grass__leaf flower__grass__leaf--4"></div>
            <div className="flower__grass__leaf flower__grass__leaf--5"></div>
            <div className="flower__grass__leaf flower__grass__leaf--6"></div>
            <div className="flower__grass__leaf flower__grass__leaf--7"></div>
            <div className="flower__grass__leaf flower__grass__leaf--8"></div>
            <div className="flower__grass__overlay"></div>
          </div>
        </div>

        <div className="growing-grass">
          <div className="flower__grass flower__grass--2">
            <div className="flower__grass--top"></div>
            <div className="flower__grass--bottom"></div>
            <div className="flower__grass__leaf flower__grass__leaf--1"></div>
            <div className="flower__grass__leaf flower__grass__leaf--2"></div>
            <div className="flower__grass__leaf flower__grass__leaf--3"></div>
            <div className="flower__grass__leaf flower__grass__leaf--4"></div>
            <div className="flower__grass__leaf flower__grass__leaf--5"></div>
            <div className="flower__grass__leaf flower__grass__leaf--6"></div>
            <div className="flower__grass__leaf flower__grass__leaf--7"></div>
            <div className="flower__grass__leaf flower__grass__leaf--8"></div>
            <div className="flower__grass__overlay"></div>
          </div>
        </div>

        <div className="grow-ans" style={{ "--d": "2.4s" } as React.CSSProperties}>
          <div className="flower__g-right flower__g-right--1">
            <div className="leaf"></div>
          </div>
        </div>

        <div className="grow-ans" style={{ "--d": "2.8s" } as React.CSSProperties}>
          <div className="flower__g-right flower__g-right--2">
            <div className="leaf"></div>
          </div>
        </div>

        <div className="grow-ans" style={{ "--d": "2.8s" } as React.CSSProperties}>
          <div className="flower__g-front">
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--1">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--2">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--3">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--4">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--5">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--6">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--7">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--8">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__line"></div>
          </div>
        </div>

        <div className="grow-ans" style={{ "--d": "3.2s" } as React.CSSProperties}>
          <div className="flower__g-fr">
            <div className="leaf"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--1"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--2"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--3"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--4"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--5"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--6"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--7"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--8"></div>
          </div>
        </div>

        <div className="long-g long-g--0">
          <div className="grow-ans" style={{ "--d": "3s" } as React.CSSProperties}>
            <div className="leaf leaf--0"></div>
          </div>
          <div className="grow-ans" style={{ "--d": "2.2s" } as React.CSSProperties}>
            <div className="leaf leaf--1"></div>
          </div>
          <div className="grow-ans" style={{ "--d": "3.4s" } as React.CSSProperties}>
            <div className="leaf leaf--2"></div>
          </div>
          <div className="grow-ans" style={{ "--d": "3.6s" } as React.CSSProperties}>
            <div className="leaf leaf--3"></div>
          </div>
        </div>

        <div className="long-g long-g--1">
          <div className="grow-ans" style={{ "--d": "3.6s" } as React.CSSProperties}>
            <div className="leaf leaf--0"></div>
          </div>
          <div className="grow-ans" style={{ "--d": "3.8s" } as React.CSSProperties}>
            <div className="leaf leaf--1"></div>
          </div>
          <div className="grow-ans" style={{ "--d": "4s" } as React.CSSProperties}>
            <div className="leaf leaf--2"></div>
          </div>
          <div className="grow-ans" style={{ "--d": "4.2s" } as React.CSSProperties}>
            <div className="leaf leaf--3"></div>
          </div>
        </div>

        <div className="long-g long-g--2">
          <div className="grow-ans" style={{ "--d": "4s" } as React.CSSProperties}>
            <div className="leaf leaf--0"></div>
          </div>
          <div className="grow-ans" style={{ "--d": "4.2s" } as React.CSSProperties}>
            <div className="leaf leaf--1"></div>
          </div>
          <div className="grow-ans" style={{ "--d": "4.4s" } as React.CSSProperties}>
            <div className="leaf leaf--2"></div>
          </div>
          <div className="grow-ans" style={{ "--d": "4.6s" } as React.CSSProperties}>
            <div className="leaf leaf--3"></div>
          </div>
        </div>

        <div className="long-g long-g--3">
          <div className="grow-ans" style={{ "--d": "4s" } as React.CSSProperties}>
            <div className="leaf leaf--0"></div>
          </div>
          <div className="grow-ans" style={{ "--d": "4.2s" } as React.CSSProperties}>
            <div className="leaf leaf--1"></div>
          </div>
          <div className="grow-ans" style={{ "--d": "3s" } as React.CSSProperties}>
            <div className="leaf leaf--2"></div>
          </div>
          <div className="grow-ans" style={{ "--d": "3.6s" } as React.CSSProperties}>
            <div className="leaf leaf--3"></div>
          </div>
        </div>

        <div className="long-g long-g--4">
          <div className="grow-ans" style={{ "--d": "4s" } as React.CSSProperties}>
            <div className="leaf leaf--0"></div>
          </div>
          <div className="grow-ans" style={{ "--d": "4.2s" } as React.CSSProperties}>
            <div className="leaf leaf--1"></div>
          </div>
          <div className="grow-ans" style={{ "--d": "3s" } as React.CSSProperties}>
            <div className="leaf leaf--2"></div>
          </div>
          <div className="grow-ans" style={{ "--d": "3.6s" } as React.CSSProperties}>
            <div className="leaf leaf--3"></div>
          </div>
        </div>

        <div className="long-g long-g--5">
          <div className="grow-ans" style={{ "--d": "4s" } as React.CSSProperties}>
            <div className="leaf leaf--0"></div>
          </div>
          <div className="grow-ans" style={{ "--d": "4.2s" } as React.CSSProperties}>
            <div className="leaf leaf--1"></div>
          </div>
          <div className="grow-ans" style={{ "--d": "3s" } as React.CSSProperties}>
            <div className="leaf leaf--2"></div>
          </div>
          <div className="grow-ans" style={{ "--d": "3.6s" } as React.CSSProperties}>
            <div className="leaf leaf--3"></div>
          </div>
        </div>

        <div className="long-g long-g--6">
          <div className="grow-ans" style={{ "--d": "4.2s" } as React.CSSProperties}>
            <div className="leaf leaf--0"></div>
          </div>
          <div className="grow-ans" style={{ "--d": "4.4s" } as React.CSSProperties}>
            <div className="leaf leaf--1"></div>
          </div>
          <div className="grow-ans" style={{ "--d": "4.6s" } as React.CSSProperties}>
            <div className="leaf leaf--2"></div>
          </div>
          <div className="grow-ans" style={{ "--d": "4.8s" } as React.CSSProperties}>
            <div className="leaf leaf--3"></div>
          </div>
        </div>

        <div className="long-g long-g--7">
          <div className="grow-ans" style={{ "--d": "3s" } as React.CSSProperties}>
            <div className="leaf leaf--0"></div>
          </div>
          <div className="grow-ans" style={{ "--d": "3.2s" } as React.CSSProperties}>
            <div className="leaf leaf--1"></div>
          </div>
          <div className="grow-ans" style={{ "--d": "3.5s" } as React.CSSProperties}>
            <div className="leaf leaf--2"></div>
          </div>
          <div className="grow-ans" style={{ "--d": "3.6s" } as React.CSSProperties}>
            <div className="leaf leaf--3"></div>
          </div>
        </div>

        <div className="grow-ans" style={{ "--d": "3s" } as React.CSSProperties}>
          <div className="leaf leaf--0"></div>
        </div>
      </div>
    </div>
  );
}