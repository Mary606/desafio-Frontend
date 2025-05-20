import Image from 'next/image';

export default function Nav() {
  return (
    <nav className="nav-gradient w-full h-16 px-4 flex items-center bg-cyan-500 shadow-lg shadow-cyan-500/50">
      <Image
        src="/global-logo.svg"
        alt="Lacrei Saúde"
        width={170}
        height={48}
        className="h-8 w-auto drop-shadow(2px 4px 6px rgba(0, 255, 0, 0.6))"
      />
    </nav>
  );
} 