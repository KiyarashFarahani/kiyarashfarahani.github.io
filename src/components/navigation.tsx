export function Navigation() {
  const links = [
    { label: "Home", active: true },
    { label: "Projects", active: false },
    { label: "About Me", active: false },
    { label: "Reach Me", active: false },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 liquid-glass rounded-full px-2 py-2 whitespace-nowrap">
        {links.map((link) => (
          <a
            key={link.label}
            href="#"
            className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-2 transition-colors ${
              link.active
                ? "bg-white/10 text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
