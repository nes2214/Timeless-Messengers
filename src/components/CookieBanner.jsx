export default function CookieBanner({ acceptCookies, rejectCookies }) {
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-6 py-4 rounded-lg shadow-lg max-w-md text-center">
        <p className="mb-3">This site uses cookies to improve your experience.</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={acceptCookies}
            className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded"
          >
            Accept
          </button>
          <button
            onClick={rejectCookies}
            className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}
