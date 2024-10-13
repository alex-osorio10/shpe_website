import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToUpcomingEvents = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#upcoming-events') {
      const element = document.getElementById('upcoming-events');
      if (element) {
        // Get the height of the fixed header to adjust scroll position
        const headerOffset = document.querySelector('.header-container').offsetHeight;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  }, [location]);

  return null;
};

export default ScrollToUpcomingEvents;
