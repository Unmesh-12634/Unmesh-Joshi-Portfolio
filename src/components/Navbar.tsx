import { useMediaQuery } from './useMediaQuery';
import { DesktopNavbar } from './DesktopNavbar';
import { MobileNavbar } from './MobileNavbar';

export function Navbar() {
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return isDesktop ? <DesktopNavbar /> : <MobileNavbar />;
}
