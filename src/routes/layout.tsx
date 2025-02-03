import { NavLinkCustom } from "@/components/ui/navlink";
import { Outlet } from "react-router";

export function LayoutRoute() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600">
      <header className="flex justify-center bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 p-5 shadow-lg">
        <nav className="mx-auto w-full max-w-6xl">
          <ul className="flex justify-center gap-8 text-lg font-bold text-white sm:text-xl">
            <li>
              <NavLinkCustom
                to="/"
                className="transition-colors hover:text-yellow-300"
              >
                App
              </NavLinkCustom>
            </li>

            <li>
              <NavLinkCustom
                to="/counter"
                className="transition-colors hover:text-yellow-300"
              >
                Counter
              </NavLinkCustom>
            </li>
            <li>
              <NavLinkCustom
                to="/about"
                className="transition-colors hover:text-yellow-300"
              >
                About
              </NavLinkCustom>
            </li>
            <li>
              <NavLinkCustom
                to="/404"
                className="transition-colors hover:text-yellow-300"
              >
                404
              </NavLinkCustom>
            </li>
          </ul>
        </nav>
      </header>

      <div className="flex-1 p-6">
        <Outlet />
      </div>

      <footer className="bg-gray-800 p-6 text-white">
        <p className="text-center">
          {new Date().getFullYear()} &copy; Task Management
        </p>
      </footer>
    </div>
  );
}
