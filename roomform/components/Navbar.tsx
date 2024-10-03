// components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-xl">SmartSpace</Link>
        <div className="space-x-4">
          <Link href="/login" className="text-white">Login</Link>
          <Link href="/editor" className="text-white">Editor</Link>
          <Link href="/pricing" className="text-white">Pricing</Link>
          <Link href="/account" className="text-white">Account Settings</Link>

        </div>
      </div>
    </nav>
  );
}
