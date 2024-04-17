'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const pathname = usePathname();
  return (
    <nav style={{ 
      backgroundColor: '#000000', 
      padding: '20px', 
      color: '#ffffff', 
      fontFamily: 'Arial, sans-serif', 
      fontSize: '30px'
    }}>
      <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
        <li style={{ display: 'inline-block', marginRight: '50px' }}>
          <Link href='/' className={pathname == '/' ? 'active' : ''}>
            Home
          </Link>
        </li>
        <li style={{ display: 'inline-block', marginRight: '50px' }}>
          <Link href='/room-list' className={pathname == '/room-list' ? 'active' : ''}>
            Room List
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
