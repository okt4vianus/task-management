export function NotFoundRoute() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 text-white">
      <h1 className="mb-4 text-5xl font-extrabold">404</h1>
      <p className="mb-6 text-2xl">
        Oops! The page you are looking for doesn't exist.
      </p>
      <a
        href="/"
        className="text-lg font-semibold text-yellow-300 transition-colors hover:text-yellow-400"
      >
        Go back to Home
      </a>
    </div>
  );
}
