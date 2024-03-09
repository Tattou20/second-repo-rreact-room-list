'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const pathname = usePathname();
  return (
    <nav>
      <ul>
        <li>
          <Link href='/' className={pathname == '/' ? 'active' : ''}>
            Home
          </Link>
        </li>
        <li>
          <Link href='/room-list' className={pathname == '/room-list' ? 'active' : ''}>
            Room List
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
