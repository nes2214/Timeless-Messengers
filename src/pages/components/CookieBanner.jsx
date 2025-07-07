import { useState } from "react";

const CookieBanner = () => {
  const [isBlocked, setBlocked] = useState(true);
  const [isSecure, setSecure] = useState(false);

  const acceptCookies = () => {
    document.cookie = `cookieConsent=true; path=/; max-age=31536000;${isSecure ? " Secure;" : ""}`;
    setBlocked(false);
  };

  const rejectCookies = () => {
    document.cookie = `cookieConsent=false; path=/; max-age=31536000;${isSecure ? " Secure;" : ""}`;
    setBlocked(true);
  };

  return (
    <>
      {isBlocked && (
        <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white py-4">
          <div className="flex justify-between items-center px-4 max-w-6xl mx-auto">
            <p className="text-sm">
              This website uses cookies to improve your experience. By clicking "Accept", you consent to our use of cookies.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={acceptCookies}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
              >
                Accept
              </button>
              <button
                onClick={rejectCookies}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
              >
                Reject
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieBanner;
