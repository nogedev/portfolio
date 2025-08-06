import { useEffect, useState } from "preact/hooks";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Works", href: "/works" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
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

            <nav className="flex items-center gap-6 mt-0.5">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-lg font-semibold text-black hover:text-black/40 transition-colors duration-300 ease-in-out"
                >
                  {item.name}
                </a>
              ))}
            </nav>
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
