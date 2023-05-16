'use client';
 
import { usePathname } from 'next/navigation';
import  Link  from 'next/link';
import navLinks from './navLink';
import "../styles/globals.css"
 
export default function Navigation() {
  const pathname = usePathname();
 
  return (
    <div className='header-nav'>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.path);
 
        return (
          <Link
            className={isActive ? 'text-blue' : 'text-black'}
            href={link.path}
            key={link.name}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}