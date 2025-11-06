import Link from "next/link";

export default function HoverMenu() {
  const menuItems = [
    { href: "/shop", label: "Shop", icon: "/Shopping.png" },
    { href: "/friends-list", label: "Friends List", icon: "/friendslist.png" },
    { href: "/friends-feed", label: "Friends Feed", icon: "/FriendsPost.png" },
    { href: "/search", label: "Search", icon: "/search-icon.png" },
    { href: "/local-feed", label: "Local Feed", icon: "/Local.png" },
    { href: "/account", label: "Account", icon: "/pfp-square.png" },
  ];

  return (
    <div className="fixed top-0 right-0 h-screen z-50 flex">
      {/* Hover trigger area */}
      <div className="group relative h-full w-6 cursor-pointer">
        {/* Sliding menu drawer */}
        <div
          className="absolute top-0 right-0 h-screen transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 flex flex-col justify-start items-center py-8"
          style={{
            width: "210px",
            backgroundImage: "url('/slidemenu1.png')",
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          {/* Grid of icons */}
          <div className="grid grid-cols-2 gap-6 px-10 justify-items-end">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col items-center gap-2 hover:text-gray-300"
              >
                {/* Icon with hover scale */}
                <img
                  src={item.icon}
                  width={75}
                  height={75}
                  className="transition-transform duration-200 ease-in-out hover:scale-110"
                />
                <span className="text-white text-sm text-center">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
