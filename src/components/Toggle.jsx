import { useState, useEffect } from 'react';

function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="flex justify-end items-center py-9 pr-[150px] pl-3">
        <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="w-14 h-8 flex items-center bg-primary/80 dark:bg-primary/60 rounded-full p-1 transition duration-300"
    >
      <div
        className={`bg-[#f5f5f5] dark:bg-background w-6 h-6 rounded-full shadow-md transform transition duration-300 ${
          isDarkMode ? 'translate-x-6' : 'translate-x-0'
        }`}
      />
    </button>
    </div>
  );
}

export default ThemeToggle;
