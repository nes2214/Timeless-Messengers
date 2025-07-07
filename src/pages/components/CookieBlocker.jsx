import { useState, useEffect } from "react";

const CookieBlocker = () => {
  const [isBlocked, setBlocked] = useState(true);
  const [showBanner, setShowBanner] = useState(false);
  const [isSecure, setSecure] = useState(false);

  useEffect(() => {
    const cookieConsent = document.cookie.split(';').find((item) => item.trim().startsWith('cookieConsent='));
    if (cookieConsent) {
      setBlocked(false);
    }
  }, []);

  useEffect(() => {
    if (showBanner) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showBanner]);

  return (
    <>
      {isBlocked && showBanner && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <h1>Access Denied</h1>
          <p>You cannot view this page because you have rejected the use of cookies.</p>
          <button
            onClick={() => {
              document.cookie = `cookieConsent=; path=/; max-age=0;${isSecure ? " Secure;" : ""}`;
              setBlocked(false);
              setShowBanner(true);
            }}
            className="bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 rounded"
          >
            Reconfigure Cookies
          </button>
        </div>
      )}
    </>
  );
};

export default CookieBlocker;
