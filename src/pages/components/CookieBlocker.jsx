import { useState, useEffect } from "react";
import CookieBanner from "./CookieBanner.jsx";

export default function CookieBlocker() {
  const [blocked, setBlocked] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const cookies = document.cookie.split(";").map(c => c.trim().split("="));
    const cookieConsent = cookies.find(([name]) => name === "cookieConsent")?.[1];

    if (cookieConsent === "rejected") {
      setBlocked(true);
    } else if (cookieConsent === "accepted") {
      setShowBanner(false);
    }
  }, []);

  const acceptCookies = () => {
    document.cookie = "cookieConsent=accepted; path=/; max-age=31536000";
    setBlocked(false);
    setShowBanner(false);
  };

  const rejectCookies = () => {
    document.cookie = "cookieConsent=rejected; path=/; max-age=31536000";
    setBlocked(true);
    setShowBanner(false);
  };

  if (blocked) {
    return (
      <div
        style={{
          position: 'fixed',
          top: 0, left: 0, width: '100vw', height: '100vh',
          backgroundColor: '#f5f7fa', display: 'flex',
          flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          zIndex: 9999, fontFamily: 'Arial, sans-serif',
        }}
      >
        <div
          style={{
            backgroundColor: 'white', padding: '40px 30px',
            borderRadius: '8px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            textAlign: 'center', maxWidth: '500px', width: '100%'
          }}
        >
          <h1
            style={{
              fontSize: '2.5rem', fontWeight: '600', color: '#333', marginBottom: '20px'
            }}
          >
            Access Denied
          </h1>
          <p
            style={{
              fontSize: '1.2rem', color: '#666', marginBottom: '30px',
            }}
          >
            You cannot view this page because you have rejected the use of cookies.
          </p>

          <button
            onClick={() => {
              setBlocked(false);
              document.cookie = "cookieConsent=; path=/; max-age=0"; // Reconfigure cookies
              setShowBanner(true);
            }}
            style={{
              background: 'linear-gradient(45deg, #00c6ff, #0072ff)', color: 'white',
              padding: '12px 24px', fontSize: '1rem', borderRadius: '5px',
              border: 'none', cursor: 'pointer', boxShadow: '0 8px 20px rgba(0, 123, 255, 0.3)',
              transition: 'all 0.3s ease-in-out',
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            Reconfigure Cookies
          </button>
        </div>
      </div>
    );
  }

  return <>{showBanner && <CookieBanner acceptCookies={acceptCookies} rejectCookies={rejectCookies} />}</>;
}
