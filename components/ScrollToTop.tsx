import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Rola para o topo quando a rota muda
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;

