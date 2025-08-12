import { useEffect, useState } from 'react';

function Footer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="font-mono mt-20 py-6 text-center text-gray-600 dark:text-gray-400">
      <p>&copy; {time.toLocaleTimeString()} — Made by Manav</p>
    </footer>
  );
}

export default Footer;
