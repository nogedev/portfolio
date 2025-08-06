import { useEffect, useState } from "preact/hooks";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Works", href: "/works" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pathname, setPathname] = useState('');

  useEffect(() => {
    setPathname(window.location.pathname);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header className="relative z-50 w-full border-b border-gray-100 bg-white px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between py-8">

          <a href="/" className="flex shrink-0 items-center">
            <img
              src="/noge-logo.png"
              alt="noge logo"
              className="h-8 w-auto object-contain"
            />
          </a>

          <div className="hidden items-center gap-6 md:flex">
            <nav className="hidden md:flex items-center gap-6 mt-0.5">
              {menuItems.map((item) => {
                // Ne pas afficher d'état actif si pathname n'est pas encore défini
                const isActive = pathname ? (
                  item.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(item.href)
                ) : false;

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`text-lg font-semibold tracking-tighter text-black hover:text-black/40 transition-colors duration-300 group relative`}
                  >
                    {item.name}
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-black transition-all duration-300 ease-in-out ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                    />
                  </a>
                );
              })}
            </nav>
          </div>
          <div className="hidden items-center gap-6 md:flex">
            <a href="/" className="bg-gray-100 p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="size-8" viewBox="0 0 1024 1024">
                <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
              </svg>
            </a>
            <a href="/" className="bg-gray-100 p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="size-8" viewBox="0 0 1024 1024">
                <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
              </svg>
            </a>
          </div>

          <button
            aria-label="Menu Toggle"
            className="md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {
              isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-10 text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-10 text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 9h16.5m-16.5 6.75h16.5"
                  />
                </svg>
              )
            }
          </button>
        </div>
      </header>

      {isOpen && (
        <div
          className="fixed inset-0 top-[88px] z-40 flex flex-col items-center justify-center space-y-6 bg-white px-4 py-10 md:hidden
    animate-fade-in"
        >
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-5xl sm:text-7xl font-bold text-black uppercase hover:text-black/40 transition-colors duration-300 ease-in-out"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Header;
